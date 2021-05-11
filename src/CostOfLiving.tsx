import * as d3 from "d3";
import {geoPath} from "d3";
import * as React from "react";
import {Feature, FeatureCollection, Geometry} from "geojson";
import {feature} from "topojson-client";
import {translations} from "./websiteTexts";
import {isLoading, LoadingState, notLoading} from "./LoadingIndex";
import {connect, DispatchProp} from "react-redux";

export type MinWageDataType = {
    "Year": number,
    "State": string,
    "Effective.Minimum.Wage": number
}
export type CostOfLivingData = {
    "State": string,
    "1960": number,
    "1980": number,
    "1995": number,
    "Region": string,
    "percent-change-from-1960": number,
    "percent-change-from-1980": number,
}
const CostOfLiving: React.FunctionComponent<DispatchProp> = (dispatchProps: DispatchProp) => {
    const projection = d3.geoAlbersUsa();
    const heatMapScale = d3.scaleLinear<string>().domain([60, 100]).range(["#D4EEFF", "#0099FF"]);
    let modifiedCostOfLivingData: any[] = [];
    let svgContainerRef = React.useRef(null);
    let legendElement = document.getElementById('legendVibe');
    const [geographies, setGeographies] = React.useState<Array<Feature<Geometry | null>>>([]);
    const [minWageData, setMinWageData] = React.useState<Array<MinWageDataType>>([]);
    const [costOfLivingData, setCostOfLivingData] = React.useState<Array<Record<string, number>>>([]);
    React.useEffect(() => {
        dispatchProps.dispatch(isLoading());
        fetch("./state-10m.json", {

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                if (response.status !== 200) {
                    dispatchProps.dispatch(notLoading());
                    console.log(`There was a problem: ${response.status}`);
                    throw Error;
                }
                response.json().then((unitedStatesData) => {
                    const mapFeatures: Array<Feature<Geometry | null>> =
                        ((feature(unitedStatesData, unitedStatesData.objects.states) as unknown) as
                            FeatureCollection).features;
                    setGeographies(mapFeatures)
                })
            })
            .catch((e: Error) => {
                //do something
            });
        fetch("./minWage.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw Error;
            }
        }).then((stateMinimumWage) => {
            let percentChange = [];
            stateMinimumWage.filter((obj: MinWageDataType) => obj.Year === 1980 || obj.Year === 1995)
                .forEach((stateDataMinWage: MinWageDataType) => {
                    if (percentChange[stateDataMinWage.State]) {
                        percentChange[stateDataMinWage.State] = Number((stateDataMinWage["Effective.Minimum.Wage"] - percentChange[stateDataMinWage.State]) / percentChange[stateDataMinWage.State] * 100).toFixed(2)
                    } else {
                        percentChange[stateDataMinWage.State] = stateDataMinWage["Effective.Minimum.Wage"]
                    }
                });

            setMinWageData(percentChange);
        });
        fetch("./cost-of-living.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw Error;
            }
        }).then((costOfLivingData: Array<CostOfLivingData>) => {
                costOfLivingData.forEach((costOfLiving: CostOfLivingData) => {
                    modifiedCostOfLivingData[costOfLiving.State] = costOfLiving["percent-change-from-1980"];
                });
                setCostOfLivingData(modifiedCostOfLivingData);
                setTimeout(() => {
                    dispatchProps.dispatch(notLoading())
                }, 1000)
            }
        )
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    },[]);
    React.useLayoutEffect(() => {
        if (svgContainerRef) {
            const getColor = (state: string) => {
                if (costOfLivingData && costOfLivingData[state]) {

                    return heatMapScale(costOfLivingData[state]);
                } else {
                    return "#DEDEDE";
                }

            };
            const Tooltip = d3.select('body')
                .append('div')
                .attr('class', 'cost-of-living-tooltip')
                .style('visibility', 'hidden')
                .style('background-color', '#2e2e2e')
                .style('color', 'white')
                .style('border-width', '2px')
                .style('border-radius', '5px')
                .style('padding', '5px')
                .style('position', 'absolute')
                .style('opacity', 0.9)
                .on('mouseover', (event) => {
                    // A bug where if the user's cursor gets on top of the Tooltip, it flashes infinitely until the user's cursor moves
                    // Very distracting and this gets rid of it completely. Besides, the cursor should never be over the Tooltip anyway
                    Tooltip.style('visibility', 'hidden').transition().duration(300);
                });
            d3.select('.countries')
                .style('width', '500px')
                .selectAll('.state')
                .data(geographies)
                .attr('fill', (data) => getColor(data.properties ? data.properties.name : ''))
                .join('path')
                .on("mouseover", () => Tooltip.style('visibility', 'visible').transition())

                // fade out tooltip on mouse out
                .on("mouseout", () => Tooltip.style('visibility', 'hidden').transition())
                .on('mousemove', (event, state) => {
                    // This adds the tooltip where the user's cursor currently is
                    //const currState = geographies.find(agg => agg.properties.name === state.properties.name);
                    /// if (currState) {
                    // We have an agg for this country, display name and their count
                    const indivStateData = costOfLivingData[state.properties.name] ? `${Number(costOfLivingData[state.properties.name]).toFixed(2)}%` : 'N/A';
                    Tooltip
                        .html('<div class="title">' + state.properties.name + '</div> Cost of Living Change (%): ' + indivStateData + '<br> Min. Wage Change (%): ' + minWageData[state.properties.name] + '%')
                        .style('left', (event.x + 10) + 'px')
                        .style('top', (event.y + 10) + 'px');
                    //  }
                })
                .exit().remove();
            if (legendElement === null) {
                let legend = [];
                for (let i = 100; i >= 60; i -= 10) {
                    legend.push(i);
                }
                const getY = (dataPoint) => {
                    return (dataPoint * 4) - 150
                }

                d3.select('.countries').append("g")
                    .attr('id', 'legendVibe')
                    .selectAll("rect")
                    .data(legend)
                    .enter()
                    .append("rect")
                    .attr("x", 50)
                    .attr("y", (d) => getY(d))
                    .attr("width", 30)
                    .attr("height", 30)
                    .style('padding-top', '50px')
                    .style('padding-bottom', '50px')
                    .attr("fill", d => heatMapScale(d))
                    .exit().remove();
                const svg = d3.select("svg")
                svg.append("text")
                    .attr("x", 10)
                    .attr("y", 100)
                    .attr('font-size', '13px')
                    .attr('font-family', 'Roboto')
                    .text("60%");
                svg.append("text")
                    .attr("x", 10)
                    .attr("y", 280)
                    .attr('font-size', '13px')
                    .attr('font-family', 'Roboto')
                    .text("100%")

            }
        }
    }, [geographies, minWageData, costOfLivingData,heatMapScale,legendElement]);

    return (
        <div className={'cost-of-living'}>
            <h2 className={"d-flex justify-content-center mt-5"}>1980-1995 Cost of Living % Change by State</h2>
            <div className={'d-flex justify-content-center'}>
                <svg width={1000} height={650} viewBox="0 0 1000 650" ref={svgContainerRef}>
                    <g className="countries" id={"usa"}>
                        {
                            geographies.map((d, i) => {
                                    return (
                                        <path
                                            key={`path-${i}`}
                                            d={geoPath().projection(projection)(d) as string}
                                            className={'state'}
                                            stroke="black"
                                            strokeWidth={0.5}
                                        />
                                    )
                                }
                            )}
                    </g>
                </svg>
            </div>
            <h4 className={'d-flex justify-content-center'}>Cost of Living Analysis</h4>
            <div className={'col-24 d-flex align-items-center justify-content-center'}>
                <p>{translations.costOfLivingText.paragraphOne}</p>
                <p>{translations.costOfLivingText.paragraphTwo}</p>
                <p>{translations.costOfLivingText.paragraphThree}</p>
                <p>{translations.costOfLivingText.paragraphFour}</p>
                <p>{translations.costOfLivingText.paragraphFive}</p>
            </div>
        </div>
    )
};
export const mapStateToProps = (state: LoadingState) => {
    return {
        isLoading: state.isLoading
    }
};
export default connect(mapStateToProps)(CostOfLiving);
