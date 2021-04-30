import * as React from "react";

export const PopUp: React.FunctionComponent = () => {
    const popUpRef= React.useRef<HTMLSpanElement>(null);
    return (
        <span ref={popUpRef}>

        </span>
    )
};
