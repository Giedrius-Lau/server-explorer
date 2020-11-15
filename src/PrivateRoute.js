import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component }) {
    const userLogin = useSelector((state) => state.userLogin);
    const { token } = userLogin;

    const storedToken = localStorage.getItem('token');

    return (
        <Route
            render={(props) => {
                if (token || storedToken) {
                    return <Component {...props} />;
                }
                return <Redirect to={{ pathname: '/' }} />;
            }}
        />
    );
}

export default PrivateRoute;
