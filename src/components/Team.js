import React from 'react';
import {Card, Col, Row, CardPanel, CardTitle} from 'react-materialize';

class Team extends React.Component{
  render(){
    return (
    <div>
      <Row>
        <Col s={1} m={4}>
            <Card className='small'>
                <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</span>
            </Card>
        </Col>
        <Col s={4} m={4}>
            <Card className='small'>
                <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</span>
            </Card>
        </Col>
        <Col s={7} m={4}>
            <Card className='small'>
                <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</span>
            </Card>
        </Col>
      </Row>	
      <Row>
        <Col s={1} m={4}>
            <Card className='small'>
                <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</span>
            </Card>
        </Col>
        <Col s={4} m={4}>
            <Card className='small'>
                <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</span>
            </Card>
        </Col>
        <Col s={7} m={4}>
            <Card className='small'>
                <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</span>
            </Card>
        </Col>
      </Row>
    </div>
    )
  };
};

export default Team;


