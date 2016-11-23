import React from 'react';
import { ListGroup, Alert, Panel } from 'react-bootstrap';
import { Tweet } from './twitter.js';


export const TwitterList = ({ twitters }) => (
  <Panel collapsible defaultExpanded header="Twitter" id="twitter-pannel">
    <p>
      les derniers tweet de Benoit!
    </p>
    <ListGroup fill className="documents-list">
      {twitters.map((doc) => (
        <Tweet key={ doc._id } tweet={ doc } />
      ))}
    </ListGroup>
  </Panel>
);


TwitterList.propTypes = {
  twitters: React.PropTypes.array,
};
