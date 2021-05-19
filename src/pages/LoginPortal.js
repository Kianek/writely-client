import Button from '../components/Button';
import Form from '../components/Form';
import Panel from '../components/Panel';
import TextInput from '../components/TextInput';

function LoginPortal(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submitting');
  };

  return (
    <div>
      <Panel>
        <h1>Login Portal</h1>
        <Form onSubmit={onSubmit}>
          <Button submit>Click me</Button>
        </Form>
      </Panel>
    </div>
  );
}

export default LoginPortal;
