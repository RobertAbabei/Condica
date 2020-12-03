export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

export function showMessage(options) {
    return {
        type: SHOW_MESSAGE,
        payload: options
    }
}

export function hideMessage() {
    return (dispatch, getState) => {
        const {show} = getState().messageReducer.options;

        if (show) {
            return dispatch({
                type: HIDE_MESSAGE
            })
        }
        
    }
    
}