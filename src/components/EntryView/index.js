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
import { useSelector } from 'react-redux';
import { selectCurrentEntry } from '../../store/entries';

function EntryView({ className }) {
  const entry = useSelector(selectCurrentEntry);

  const [title, setTitle] = useState(entry.title);
  const [tags, setTags] = useState(entry.tags);
  const [body, setBody] = useState(entry.body);

  useEffect(() => {
    setTitle(entry.title);
    setTags(entry.tags);
    setBody(entry.body);
  }, [entry, setTitle, setTags, setBody]);

  const onChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const onSubmit = () => console.log('click');

  return (
    <div id="entry-view">
      <Column>
        <Form fluid onSubmit={onSubmit}>
          <TextInput
            fluid
            placeholder="Title"
            onChange={onChange(setTitle)}
            value={title}
          />
          <Padding amount="0.25em" />
          <TextInput
            fluid
            placeholder="Tags"
            onChange={onChange(setTags)}
            value={tags}
          />
          <Padding amount="0.25em" />
          <TextArea
            fluid
            onChange={onChange(setBody)}
            placeholder="Body"
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
