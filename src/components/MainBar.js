import React from 'react';
import { Link } from 'react-router-dom';


class MainBar extends React.Component{
  render(){
    return (
			<nav className="nav-margin">	    
        <div className="nav-wrapper">
					<Link to="/" className="brand-logo pacifico"> Broco.ly </Link>
          <ul className="right">
            <li> <Link to="/team"> Our Team </Link> </li>
	    			<li> <Link to="/about">  About </Link> </li>
  	    		<li> <Link to="/projects"> Projects </Link> </li>
	    			<li> <Link to="/contact"> Contact </Link> </li> 
          </ul>
				</div>
      </nav>
    )
  };
};
	
export default MainBar;

