import React from 'react';
import Router from 'react-router';
import routes from 'routes';
require('./../scss/main.scss');
Router.run(routes, Router.HistoryLocation, (Root, state) => {
    React.render(<Root {...state}/>, document.getElementById('content'));
});
