var React = require('react');
var ReactDOM = require('react-dom');
//destructuring syntax - same as - var Route = require('react-router').Route and so on
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation-sites - uses loaders also
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  //router component
  <p>Boilerplate 3 project</p>,
  document.getElementById('app')
);
