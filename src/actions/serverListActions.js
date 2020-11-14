import axios from 'axios';
import {
    SERVER_LIST_REQUEST,
    SERVER_LIST_SUCCESS,
    SERVER_LIST_FAIL,
} from '../constants/serverListConstants';

export const getServerList = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SERVER_LIST_REQUEST,
        });

        const {
            userLogin: { token },
        } = getState();

        console.log(token);

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        };

        const { data } = await axios({
            method: 'get',
            url: 'https://playground.tesonet.lt/v1/servers',
            config,
        });

        console.log(data);

        dispatch({
            type: SERVER_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SERVER_LIST_FAIL,
            payload:
                error.response && error.response.data.mesage
                    ? error.response.data.message
                    : error.message,
        });
    }
};
