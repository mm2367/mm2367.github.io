import {isLoadingActionTypes, LoadingAction, LoadingState} from "./LoadingIndex";

export const initialLoadingState:LoadingState={
    isLoading:false
}
export const loadingReducer = (state: LoadingState = initialLoadingState, action: LoadingAction):LoadingState => {
    switch (action.type) {
        case isLoadingActionTypes.LOADING_START:
            return {...state,
                isLoading:true
            };
        case isLoadingActionTypes.LOADING_STOP:
            return {
                isLoading:false
            }
        default:
            return state;
    }
};
