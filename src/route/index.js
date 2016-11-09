import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';


import MainLayout from '../layout/MainLayout'


import Home from '../pages/Home/Home'

import DeptChoice from '../components/DeptChoice'



const isReactComponent = (obj) => Boolean(obj && obj.prototype && Boolean(obj.prototype.isReactComponent));

const component = (component) => {
  return isReactComponent(component)
    ? {component}
    : {getComponent: (loc, cb)=> component(
         comp=> cb(null, comp.default || comp))}
};



const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={MainLayout}>


         <IndexRoute component={Home} />
         <Route path='Home' component={Home} />
         <Route path='Choice' component={DeptChoice} />
    </Route>
    
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;