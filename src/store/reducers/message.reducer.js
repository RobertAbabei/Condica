import * as Actions from '../actions/message.actions';

const initialState = {
    options: {
        show: false,
        message: "Hello",
        autoHideDuration: 3000
    }
}

const message = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SHOW_MESSAGE: {
            return {
                options: {
                    ...initialState.options,
                    show: true,
                    ...action.payload
                }
            };
        }
        case Actions.HIDE_MESSAGE: {
            return {
                options: {
                    ...state.options,
                    show: false
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default message;