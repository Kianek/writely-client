import React from 'react';
import Paragraph from './Paragraph';
import HorizontalRule from './HorizontalRule';
import '../styles/_entry.scss';

function Entry({ entry }) {
  function selectEntry() {
    console.log(`You've touched entry no. ${entry.id}!`);
  }

  return (
    <li id="entry" onClick={selectEntry}>
      <div className="container">
        <h4>{entry.title}</h4>
        <HorizontalRule />
        <Paragraph small>Created At: {entry.createdAt}</Paragraph>
      </div>
    </li>
  );
}

export default Entry;
