import { useRouteMatch } from 'react-router';
import Button from '../components/Button';
import Panel from '../components/Panel';
import ToolBar from '../components/ToolBar';
import useNavigateTo from '../hooks/useNavigateTo';

function Profile() {
  const { url } = useRouteMatch();
  const func = () => console.log('click');

  return (
    <main>
      <Panel>
        <ToolBar left>
          <Button info onClick={useNavigateTo('/dashboard')}>
            <i className="fas fa-arrow-left" />
          </Button>
        </ToolBar>
        <h1>Profile</h1>
        <Button block onClick={useNavigateTo(`${url}/email`)}>
          Change Email
        </Button>
        <Button block onClick={useNavigateTo(`${url}/password`)}>
          Change Password
        </Button>
        <h3>Welcome to the Danger Zone</h3>
        <Button block danger onClick={func}>
          Delete Account
        </Button>
      </Panel>
    </main>
  );
}

export default Profile;
