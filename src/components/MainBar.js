import React from 'react';

class MainBar extends React.Component{
  render(){
    return (
      <div className="navbar-fixed">
        <nav>	    
          <div className="nav-wrapper row">
            <ul className="right hide-on-med-and-down">
              <li> <a> Our Team </a> </li>
	      <li> <a> About </a> </li>
  	      <li> <a> Projects </a> </li>
	      <li> <a> Contact </a> </li> 
            </ul>
	  </div>
	</nav>
      </div>
    )
  };
};

export default MainBar;

