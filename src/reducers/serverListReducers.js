import {
    SERVER_LIST_REQUEST,
    SERVER_LIST_SUCCESS,
    SERVER_LIST_FAIL,
} from '../constants/serverListConstants';

export const serverListReducer = (state = {}, action) => {
    switch (action.type) {
        case SERVER_LIST_REQUEST:
            return {
                loading: true,
            };
        case SERVER_LIST_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload,
            };
        case SERVER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
