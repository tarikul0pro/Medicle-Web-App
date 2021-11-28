import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const {AllContexts} = useAuth();
    const {user}=AllContexts;
    const {displyName}=user;
    return (
        <div>
             <Route
      {...rest}
      render={({ location }) =>
        displyName ? (
          children 
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivetRoute;

