import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainBar from './MainBar';
import Content from './Content';

class App extends React.Component{
  render(){
    return (
      <Router>
	<div className="container">
          <MainBar/>
 	  <Content/>
	</div>
      </Router>
    )
  };
};

export default App;
