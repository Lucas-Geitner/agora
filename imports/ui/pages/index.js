import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
// import { TwitterList } from '../components/twitter-list.js';
import TwitterList from '../containers/twitter-list.js';
// import FacebookList from '../containers/facebook-list.js';


export const Index = () => (
  <Jumbotron className="text-center">
    <h2>Réseau sociaux : </h2>
    <p> Lets follow Benoit</p>
    <Row>
      <Col xs={ 12 } sm={ 6 }>
        <TwitterList />
      </Col>
      <Col xs={ 12 } sm={ 6 }>
        {/* <FacebookList /> */}
      </Col>
    </Row>
    <p><a className="btn btn-success" href="https://www.benoithamon2017.fr/" role="button"> Benoit Hamon</a></p>
    <p style={ { fontSize: '16px', color: '#aaa' } }>L'équipe Numérique</p>
  </Jumbotron>
);
