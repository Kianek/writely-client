import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';
import ToolBar from './ToolBar';
import '../styles/_entry-view.scss';

function EntryView(props) {
  const [title, setTitle] = useState('');

  function saveEntry(event) {
    event.preventDefault();
  }

  return (
    <div id="entry-view">
      <form onSubmit={saveEntry}>
        <ToolBar right>
          <Button flat link to="/dashboard">
            Back to Dashboard
          </Button>
        </ToolBar>
        <h3>{props.journal}</h3>
        <TextInput
          block
          placeholder="Title"
          value={title}
          onChange={setTitle}
        />
        <textarea placeholder="Tell me your deepest, darkest secrets.."></textarea>
        <Button block flat onClick={saveEntry}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default EntryView;
