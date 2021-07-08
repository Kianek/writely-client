import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Column from '../Column';
import Form from '../Form';
import TextArea from '../TextArea';
import TextInput from '../TextInput';
import './entry-view.scss';
import Padding from '../Padding';
import { useSelector } from 'react-redux';
import { selectCurrentEntry } from '../../store/entries';
import EntryStatus from '../EntryStatus';

function EntryView({ className, entry }) {
  const [isDirty, setIsDirty] = useState(false);
  const [title, setTitle] = useState(entry.title || '');
  const [tags, setTags] = useState(entry.tags || '');
  const [body, setBody] = useState(entry.body || '');

  useEffect(() => {
    setTitle(entry.title);
    setTags(entry.tags);
    setBody(entry.body);
  }, [entry, setTitle, setTags, setBody]);

  const checkIsDirty = (previousValue, value) => {
    if (!isDirty && previousValue !== value) {
      setIsDirty(true);
    }
  };

  const onChange = (value, setter) => (event) => {
    const { target } = event;
    checkIsDirty(value, target.value);

    setter(target.value);
  };

  const onSubmit = () => {
    if (!isDirty) {
      console.log('no changes made yet');
      return;
    }
    console.log('click');
    setIsDirty(false);
  };

  return (
    <div id="entry-view">
      <Column>
        <Form fluid onSubmit={onSubmit}>
          <TextInput
            fluid
            placeholder="Title"
            onChange={onChange(title, setTitle)}
            value={title}
          />
          <Padding amount="0.25em" />
          <TextInput
            fluid
            placeholder="Tags"
            onChange={onChange(tags, setTags)}
            value={tags}
          />
          <Padding amount="0.25em" />
          <TextArea
            fluid
            onChange={onChange(body, setBody)}
            placeholder="Body"
            value={body}
          />
          <EntryStatus bodyText={body} touched={isDirty} />
          <Button block flat disabled={!isDirty} submit>
            Save
          </Button>
        </Form>
      </Column>
    </div>
  );
}

export default EntryView;
