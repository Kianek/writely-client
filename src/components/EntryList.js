import React from 'react';
import '../styles/_entry-list.scss';

function EntryList(props) {
  return <ul id="entry-list">{props.children}</ul>;
}

export default EntryList;
