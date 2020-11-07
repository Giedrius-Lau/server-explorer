import axios from 'axios';
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from '../constants/userConstants';

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const { data } = await axios({
            method: 'post',
            url: 'https://playground.tesonet.lt/v1/tokens',
            data: {
                username,
                password,
            },
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem('token', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.mesage
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const logout = (history) => async (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: USER_LOGOUT });
    history.push('/');
};
