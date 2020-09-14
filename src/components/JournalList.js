import React from 'react';
import '../styles/_journal-list.scss';

function JournalList(props) {
  return <ul id="journal-list">{props.children}</ul>;
}

export default JournalList;
