import * as React from "react";
import {SocialIcon} from 'react-social-icons';
import {translations} from "./websiteTexts";
import ReactTooltip from "react-tooltip";
import {SkillComponent} from "./SkillComponent";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CSSTransition from "react-transition-group/CSSTransition";

export const InteractiveResume: React.FunctionComponent = () => {
    const skillsRef = React.useRef(null);
    const [showHeafDropDown, setShowHeafDropDown] = React.useState<boolean>(false);
    const [showCMIYDropDown, setShowCMIYDropDown] = React.useState<boolean>(false);
    const [showURMCDropDown, setShowURMCDropDown] = React.useState<boolean>(false);

    const [menuHeight, setMenuHeight] = React.useState(null);
    const calcHeight = (element) => {
        const height = element.offsetHeight;
        console.log(height);
        setMenuHeight(height);
    };
    const handleSkillsClick = () => {
        if (skillsRef && skillsRef.current) {
            skillsRef.current.scrollIntoView(true);

        }
    };

    return (
        <div className={'container interactive-resume mt-5 position-relative'}>
            <h2 className={'interactive-resume_title'}>{'Milam Milhouse'}</h2>
            <hr/>
            <div
                className={'d-flex align-items-center justify-content-center mb-3 interactive-resume_quote'}>
                {translations.interactiveResume.steveJobs}
            </div>
            <div className={'row no-gutters justify-content-center'}>

            </div>
            <div className={'d-flex justify-content-center pr-3'}>
                <img className={'interactive-resume_profile-pic'} alt={'Milam Milhouse'}
                     src={'./profilepic_website_.jpg'}/>
            </div>
            <div className={'d-flex align-items-start'}>
                <div className={'col-6'}>
                    <h2 className={'d-flex justify-content-center mt-3'}>{'About Me'}</h2>
                    <div
                        className={'justify-content-center d-flex text-center mx-5'}>{translations.interactiveResume.aboutMe}</div>
                </div>
                <div className={'col-6'}>
                    <h2 className={'d-flex justify-content-center mt-3'}>{'Details'}</h2>
                    <div className={'flex-column d-flex justify-content-center text-center about-me'}>
                        <div className={'mt-2'}>Name: Milam Milhouse</div>
                        <div className={'mt-2'}>Current Location: New York, NY</div>
                        <div className={'mt-2'}>Hometown: Chicago, IL</div>
                        <div className={'mt-2'}>Age: 23</div>
                        <div className={'mt-2'}><SocialIcon url={'https://www.linkedin.com/in/milammilhouse/'}/></div>
                    </div>
                </div>
            </div>
            <h2 className={'text-center mt-2'}>Education</h2>
            <div className={'container d-flex mt-4'}>
                <div className={'col-md-3 text-left'}>
                    <div>{'Cornell University, 2019'}</div>
                    <LocationOnIcon htmlColor={'#E18D96'}/>
                    <i>{'Ithaca, NY'}</i>
                </div>
                <div className={'col-md-9 text-center'}>
                    <i>{'Bachelor of Arts, Information Science (Concentrations: Behavioral Science, Data Science)'}</i>
                    <div className={'mt-3'}>{translations.interactiveResume.infoSciDescription}</div>
                </div>
            </div>
            <h2 className={'text-center mt-4'}>Honors</h2>
            <div className={'d-flex align-items-center justify-content-center mb-3'}>
                <div className={'col-lg col-3 d-flex justify-content-center'}><aside className={'ribbon'} data-tip={'posse-scholar'} data-for={'posse-scholar'}>
                    Posse Scholar
                </aside>
                </div>
                <ReactTooltip id={'posse-scholar'} place={'top'}
                              effect={'solid'}>{translations.interactiveResume.posseScholar}</ReactTooltip>
                <div className={'col-lg col-3 d-flex justify-content-center'}><aside data-tip={'quill-dagger'} data-for={'quill-dagger'} className={'ribbon'}>Quill & Dagger
                </aside>
                </div>
                <ReactTooltip id={'quill-dagger'} place={'top'}
                              effect={'solid'}>{translations.interactiveResume.quillAndDagger}</ReactTooltip>

                <div className={'col-lg col-3  d-flex justify-content-center'}> <aside data-tip={'balanced-scholar'} data-for={'balanced-scholar'} className={'ribbon'}>Balanced-Man
                    Scholar
                </aside>
                </div>
                <ReactTooltip id={'balanced-scholar'} place={'top'}
                              effect={'solid'}>{translations.interactiveResume.balancedScholar}</ReactTooltip>
                <div className={'col-lg col-3 d-flex justify-content-center'}><aside className={'ribbon'} data-tip={'cisLeader'} data-for={'cisLeader'}>Cornell CIS</aside>
                <ReactTooltip id={'cisLeader'} place={'top'}>{translations.interactiveResume.cisLeader}</ReactTooltip>
                </div>
            </div>
            <h2 ref={skillsRef} className={'text-center mt-4'}>{'Skills'}</h2>
            <div className={'d-flex'}>
                <div className={'col-md-6 ml-3'}>
                    <SkillComponent skillName={'HTML'} ability={4}/>
                    <SkillComponent skillName={'CSS'} ability={4}/>
                    <SkillComponent skillName={'Bootstrap'} ability={4}/>
                    <SkillComponent skillName={'React'} ability={3}/>
                    <SkillComponent skillName={'Git'} ability={3}/>

                </div>
                <div className={'col-md-6 mr-3'}>
                    <SkillComponent skillName={'Typescript'} ability={3}/>
                    <SkillComponent skillName={'Javascript'} ability={3}/>
                    <SkillComponent skillName={'Python'} ability={2}/>
                    <SkillComponent skillName={'Java'} ability={2}/>
                    <SkillComponent skillName={'SQL'} ability={1}/>
                </div>
            </div>
            <h2 className={'text-center my-4'}>{'Languages'}</h2>
            <div className={'d-flex my-3'}>
                <SkillComponent className={'col-md-6'} skillName={'English (Native Language)'} ability={5}/>
                <SkillComponent className={'col-md-6'} skillName={'Chinese (Survivable)'} ability={2}/>
            </div>
            <h2 className={'text-center mt-2'}>{'Experience'}</h2>
            <div className={'d-flex mt-3'}>
                <div className={'col-md-4'}>
                    <div>{'JPMorgan Chase & Co.'}</div>
                    <div>{'Software Engineer, June 2019 - Current'}</div>
                    <LocationOnIcon htmlColor={'#E18D96'}/>
                    <i>{'New York, NY'}</i>
                </div>
                <div className={'col-md-8'}>
                    <ul>
                        <li>{translations.interactiveResume.jpMorgan.one}</li>
                        <li>{translations.interactiveResume.jpMorgan.two}</li>
                        <li>{translations.interactiveResume.jpMorgan.three}</li>
                        <li>{translations.interactiveResume.jpMorgan.four}</li>
                        <li>{translations.interactiveResume.jpMorgan.five}</li>
                        <li>Projects</li>
                        <ul>
                            <li>
                                <a href={'https://am.jpmorgan.com/tools/dt-tdc/'} target='_blank'
                                   rel='noopener noreferrer'>am.jpmorgan.com/tools/dt-tdc/</a>
                            </li>
                            <li>
                                <a href={'https://am.jpmorgan.com/tools/dt-ic/core-menu/'} target='_blank'
                                   rel='noopener noreferrer'>am.jpmorgan.com/tools/dt-ic/core-menu/</a>
                            </li>
                            <li>
                                <a href={'https://am.jpmorgan.com/tools/dt-ssi/'} target='_blank'
                                   rel='noopener noreferrer'>am.jpmorgan.com/tools/dt-ssi/</a>
                            </li>
                            <li>
                                <a href={'https://am.jpmorgan.com/tools/dt-rl/'} target='_blank'
                                   rel='noopener noreferrer'>am.jpmorgan.com/tools/dt-rl/</a>
                            </li>
                        </ul>
                    </ul>
                    <div className={'d-flex align-items-center justify-content-between pl-2'}>

                    </div>
                </div>
            </div>
            <div className={'d-flex mt-3'}>
                <div className={'col-md-4 '}>
                    <div>{'BNY Mellon'}</div>
                    <div>{'Technology Analyst'}</div>
                    <LocationOnIcon htmlColor={'#E18D96'}/>
                    <i>{'New York, NY'}</i>
                </div>
                <div className={'col-md-8'}>
                    <ul>
                        <li>{translations.interactiveResume.bnyMellon.one}</li>
                        <li>{translations.interactiveResume.bnyMellon.two}</li>
                    </ul>
                </div>
            </div>
            <div className={'d-flex mt-3'}>
                <div className={'col-md-4 '}>
                    <div>{'Cornell University IT Security Office'}</div>
                    <div>{'Software Developer'}</div>
                    <LocationOnIcon htmlColor={'#E18D96'}/>
                    <i>{'New York, NY'}</i>
                </div>
                <div className={'col-md-8'}>
                    <ul>
                        <li>{translations.interactiveResume.cornellIT.one}</li>
                        <li>{translations.interactiveResume.cornellIT.two}</li>
                        <li>{translations.interactiveResume.cornellIT.two}</li>
                    </ul>
                </div>
            </div>
            <h2 className={'text-center'}>{'Leadership/Volunteer Experience'}</h2>
            <div className={'d-flex py-5 volunteer-container'}>

                <div className={'col-md-4 text-center leadership-experience position-relative'}
                     onClick={() => setShowHeafDropDown(!showHeafDropDown)}>
                    <div className={'mt-3'}>{'Harlem Educational Activities Fund '}</div>
                    <div>{'Tutor'}</div>
                    <CSSTransition in={showHeafDropDown} timeout={250} classNames={'menu-primary'} unmountOnExit>

                        <div
                            className={'leadership-experience_dropDown position-absolute d-flex align-items-center justify-content-center'}>
                            <div className={'menu'}>
                                <div>{translations.interactiveResume.volunteerLeadership.heaf}</div>
                            </div>
                        </div>
                    </CSSTransition>

                </div>
                <div className={'col-md-4 text-center leadership-experience position-relative'}
                     onClick={() => setShowCMIYDropDown(!showCMIYDropDown)}>
                    <div className={'mt-3'}>{'Cornell Mentors for Incarcerated Youth'}</div>
                    <div>{'Curriculum Coordinator/Tutor'}</div>
                    <CSSTransition in={showCMIYDropDown} timeout={250} classNames={'menu-primary'} unmountOnExit>
                        <div
                            className={'leadership-experience_dropDown position-absolute d-flex align-items-center justify-content-center'}>
                            <div className={'menu'}>
                                {translations.interactiveResume.volunteerLeadership.cmiy}
                                {translations.interactiveResume.volunteerLeadership.cmiyTwo}

                            </div>
                        </div>
                    </CSSTransition>
                </div>
                <div className={'col-md-4 text-center leadership-experience'}
                     onClick={() => setShowURMCDropDown(!showURMCDropDown)}>
                    <div className={'mt-3'}>{'Under-Represented Minorities in Computing'}</div>
                    <div>{'Co-President'}</div>
                    <CSSTransition in={showURMCDropDown} timeout={250} classNames={'menu-primary'} unmountOnExit>
                        <div
                            className={'leadership-experience_dropDown position-absolute d-flex align-items-center justify-content-center'}>
                            <div className={'menu'}>
                                {translations.interactiveResume.volunteerLeadership.urmc.one}
                                {translations.interactiveResume.volunteerLeadership.urmc.two}
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            </div>
        </div>
    )
};
