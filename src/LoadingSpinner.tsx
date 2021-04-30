import {PacmanLoader} from "react-spinners";
import * as React from "react";
import {LoadingState} from "./LoadingIndex";
import {connect} from "react-redux";

export interface LoadingSpinnerProps {
    isLoading: boolean

}

const LoadingSpinner: React.FunctionComponent<LoadingSpinnerProps> = (props: LoadingSpinnerProps) => {
    const override = `
  display: block;
  top: 45%;
  left:45%;
  border-color: red;
  position: unset
`;
    return (
        props.isLoading ?
            <div className={'modal-backdrop d-flex align-items-center justify-content-center'}>
                <div className={'loading-spinner position-relative'}>
                    <PacmanLoader css={override} loading={props.isLoading} size={50} color={'#f4afb3'}/>
                    <div
                        className={'loading-spinner_text position-absolute'}>{'loading...'}</div>
                </div>
            </div> : null

    );
};

const mapStateToProps = (state: LoadingState) => {
    return {
        isLoading: state.isLoading
    }
}
export default connect(mapStateToProps)(LoadingSpinner)
