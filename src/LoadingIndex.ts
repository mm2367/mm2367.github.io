export interface LoadingState {
    isLoading: boolean
}

export enum isLoadingActionTypes {
    LOADING_START = 'LOADING_START',
    LOADING_STOP = 'LOADING_STOP'
}

export interface STARTLOADINGACTION {
    type: isLoadingActionTypes.LOADING_START,
}

export interface STOPLOADINGACTION {
    type: isLoadingActionTypes.LOADING_STOP,
}

export const isLoading = (): STARTLOADINGACTION => {
    return {
        type: isLoadingActionTypes.LOADING_START

    }
};
export const notLoading = (): STOPLOADINGACTION => {
    return {
        type: isLoadingActionTypes.LOADING_STOP
    }
};
export type LoadingAction = STARTLOADINGACTION | STOPLOADINGACTION;

