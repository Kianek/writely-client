/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';
import ToolBar from './ToolBar';

const styles = (theme) => css`
  ${theme.flex.row}
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;

  form {
    width: 80%;

    h3 {
      margin-bottom: 1.5rem;
    }

    input,
    textarea {
      width: 100%;
    }

    textarea {
      border: solid 1px ${theme.colors.lightGray};
      border-radius: 3px;
      font-family: 'Roboto', Arial, Helvetica, sans-serif;
      font-size: 1rem;
      height: 20rem;
      margin-bottom: 0.5rem;
      padding: 0.25rem;
    }
  }
`;

function EntryView({ journal, selectedEntry }) {
  const [title, setTitle] = useState('');

  function saveEntry(event) {
    event.preventDefault();
  }

  return (
    <div css={styles} id="entry-view">
      <form onSubmit={saveEntry}>
        <ToolBar right>
          <Button outline link to="/dashboard">
            <i className="fas fa-arrow-left" /> Dashboard
          </Button>
        </ToolBar>
        <h3>{journal.title}</h3>
        <TextInput
          block
          placeholder="Title"
          value={title}
          onChange={setTitle}
        />
        <textarea placeholder="Tell me your deepest, darkest secrets..">
          {selectedEntry}
        </textarea>
        <Button block outline onClick={saveEntry}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default EntryView;
