import { withRouter } from 'react-router-dom';
import React from 'react'

const RouteHistory = ({ history, onMobileRouteChange }) => {

    history.listen((location, action) => {
        // location is an object like window.location
        onMobileRouteChange()
    });

    return (<div></div>
    )
};

export default withRouter(RouteHistory);