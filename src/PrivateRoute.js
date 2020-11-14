import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component }) {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const storedToken = localStorage.getItem('token');

    return (
        <Route
            render={(props) => {
                if (userInfo || storedToken) {
                    return <Component {...props} />;
                }
                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
            }}
        />
    );
}

export default PrivateRoute;
