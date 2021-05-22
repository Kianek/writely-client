import Button from '../components/Button';
import Panel from '../components/Panel';
import Rule from '../components/Rule';
import ToolBar from '../components/ToolBar';

function Profile() {
  const func = () => console.log('click');

  return (
    <main>
      <Panel>
        <ToolBar left>
          <Button info onClick={func}>
            Back
          </Button>
        </ToolBar>
        <h1>Profile</h1>
        <Button block onClick={func}>
          Change Email
        </Button>
        <Button block onClick={func}>
          Change Password
        </Button>
        <Rule />
        <h3>Welcome to the Danger Zone</h3>
        <Button block danger onClick={func}>
          Delete Account
        </Button>
      </Panel>
    </main>
  );
}

export default Profile;
