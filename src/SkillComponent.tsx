import StarIcon from '@material-ui/icons/Star';
import * as React from "react";

export interface SkillComponentProps {
    skillName: string;
    ability: 1 | 2 | 3 | 4 | 5;
    className?: string
}

export const SkillComponent: React.FunctionComponent<SkillComponentProps> = (props: SkillComponentProps) => {
    const stars = (proficiency: number) => {
        let star = [];
        for (let x = 0; x < proficiency; x++) {
            star.push(<StarIcon htmlColor={'pink'}/>);
        }
        for(let y = 0; y< (5-proficiency);y++){
            star.push(<StarIcon htmlColor={'#dfe0e0'}/>);
        }
        return star;
    };

    return (
        <div className={'d-flex align-items-center skill-component ' + (props.className ? props.className : '')}>
            <div className={'skill-component_title py-2'}>{props.skillName}</div>
            {stars(props.ability)}
        </div>
    )

};
