import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServerList } from '../actions/serverListActions';
import { logout } from '../actions/userActions';

import Loader from '../components/Loader';
import Message from '../components/Message';

const ServerListScreen = (history) => {
    const [serversList, setServersList] = useState([
        {
            name: 'United States #89',
            distance: 132,
        },
        {
            name: 'Germany #77',
            distance: 841,
        },
    ]);
    const dispatch = useDispatch();

    const serverList = useSelector((state) => state.serverList);
    const { loading, error, servers } = serverList;

    useEffect(() => {
        setServersList(servers);
    }, [servers]);

    useEffect(() => {
        dispatch(getServerList());
    }, [dispatch]);

    const logoutHandler = () => {
        dispatch(logout(history));
    };

    return (
        <>
            <div>
                {loading ? (
                    <Loader></Loader>
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <div>
                        <button onClick={logoutHandler}>Logout</button>
                        <h3>Server List</h3>
                        {serversList.map((server, i) => {
                            return (
                                <div key={i}>
                                    <p>{server.name}</p>
                                    <p>{server.distance}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default ServerListScreen;
