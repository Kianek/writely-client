import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Column from '../Column';
import Form from '../Form';
import TextArea from '../TextArea';
import TextInput from '../TextInput';
import './entry-view.scss';
import Padding from '../Padding';

function EntryView({ className, entry }) {
  const [title, setTitle] = useState('Entry');
  const [tags, setTags] = useState('one,two,three');
  const [body, setBody] = useState('Stuff');

  const onSubmit = () => console.log('click');

  return (
    <div id="entry-view">
      <Column>
        <Form fluid onSubmit={onSubmit}>
          <TextInput
            fluid
            placeholder="Title"
            onChange={setTitle}
            value={title}
          />
          <Padding amount="0.25em" />
          <TextInput fluid placeholder="Tags" onChange={setTags} value={tags} />
          <Padding amount="0.25em" />
          <TextArea
            fluid
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
          <Button block flat submit>
            Save
          </Button>
        </Form>
      </Column>
    </div>
  );
}

export default EntryView;
