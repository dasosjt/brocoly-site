import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Team from './Team';

class Content extends React.Component{
  render(){
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about/" component={About}/>
        <Route exact path="/team/" component={Team}/>
      </div>
    )
  };
};

export default Content;
