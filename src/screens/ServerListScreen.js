import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServerList } from '../actions/serverListActions';

import Loader from '../components/Loader';
import Message from '../components/Message';

const ServerListScreen = () => {
    const dispatch = useDispatch();

    const serverList = useSelector((state) => state.serverList);
    console.log(serverList);
    const { loading, error, servers } = serverList;

    useEffect(() => {
        dispatch(getServerList());
    }, [dispatch]);

    return (
        <>
            <div>
                {loading ? (
                    <Loader></Loader>
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <div>
                        <h3>Server List</h3>
                        {/* {servers.map((server) => {
                            return (
                                <div key={server}>
                                    <p>{server.name}</p>
                                    <p>{server.distance}</p>
                                </div>
                            );
                        })} */}
                    </div>
                )}
            </div>
        </>
    );
};

export default ServerListScreen;
