import React from 'react';
import {  ListGroup, Alert, Panel } from 'react-bootstrap';
import { Facebook } from './facebook.js';

export const FacebookList = ({ facebooks }) => (
  <Panel collapsible defaultExpanded header="Facebook" id="facebook-pannel" className="facebook-pannel">
    <p>
      les derniers post Facebook de Benoit!
    </p>
    <ListGroup fill className="documents-list">
      {facebooks.map((doc) => (
        <Facebook key={ doc._id } facebook={ doc } />
      ))}
    </ListGroup>
  </Panel>
);


FacebookList.propTypes = {
  facebooks: React.PropTypes.array,
};
