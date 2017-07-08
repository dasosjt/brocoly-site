import React from 'react';
import { Link } from 'react-router-dom';


class MainBar extends React.Component{
  render(){
    return (
      <div className="navbar-fixed">
        <nav>	    
          <div className="nav-wrapper row">
            <ul className="right hide-on-med-and-down">
              <li> <Link to="/team"> Our Team </Link> </li>
	      <li> <Link to="/about">  About </Link> </li>
  	      <li> <Link to="/projects"> Projects </Link> </li>
	      <li> <Link to="/contact"> Contact </Link> </li> 
            </ul>
	  </div>
	</nav>
      </div>
    )
  };
};

export default MainBar;

