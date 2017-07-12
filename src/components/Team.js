import React from 'react';
import {Card, Col, Row, CardPanel, CardTitle} from 'react-materialize';

class Team extends React.Component{
  render(){
    return (
    <div>
    	<div className="row">
    		<Card 
    			className="col s4 m4" 
    			header=
    			{
    				<CardTitle>
    					Nombre1
    				</CardTitle>
    			}>
    			Description Integrante 1
    		</Card>
    		<Card 
    			className="col s4 m4" 
    			header=
    			{
    				<CardTitle>
    					Nombre2
    				</CardTitle>
    			}>
    			Description Integrante 2
    		</Card>
    		<Card 
    			className="col s4 m4" 
    			header=
    			{
    				<CardTitle>
    					Nombre3
    				</CardTitle>
    			}>
    			Description Integrante 3
    		</Card>
    		
    	</div>
    </div>
    	
    	
 
    	
	
    )
  };
};

export default Team;


