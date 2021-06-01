import { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Panel from '../components/Panel';
import TextInput from '../components/TextInput';
import ToolBar from '../components/ToolBar';
import useNavigateTo from '../hooks/useNavigateTo';
import { isEmail } from '../validators';

function ChangeEmail() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  return (
    <main>
      <Panel>
        <ToolBar left>
          <Button circle info onClick={useNavigateTo('/profile')}>
            <i className="fas fa-arrow-left" />
          </Button>
        </ToolBar>
        <Form onSubmit={() => console.log('click')}>
          <h1>Change Email</h1>
          <p>Current: {'jim@gmail.com'}</p>
          <TextInput
            errors={errors}
            errorHandler={setErrors}
            placeholder="New Email"
            onChange={setEmail}
            validators={[isEmail]}
            value={email}
          />
          <Button block loading={loading}>
            Save
          </Button>
        </Form>
      </Panel>
    </main>
  );
}

export default ChangeEmail;
