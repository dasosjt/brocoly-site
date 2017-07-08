import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import About from './About';

class Content extends React.Component{
  render(){
    return (
      <div>
        <Route exact path="/dist" component={Home}/>
        <Route exact path="/about" component={About}/>
      </div>
    )
  };
};

export default Content;
