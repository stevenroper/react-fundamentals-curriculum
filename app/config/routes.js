var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var HelloWorld = require('../components/HelloWorld');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={HelloWorld}>
    </Route>
  </Router>
);

module.exports = routes;