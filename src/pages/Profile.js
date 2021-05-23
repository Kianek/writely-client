import { Fragment, useState } from 'react';
import { useRouteMatch } from 'react-router';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Panel from '../components/Panel';
import ToolBar from '../components/ToolBar';
import useNavigateTo from '../hooks/useNavigateTo';

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const { url } = useRouteMatch();
  const func = () => console.log('click');

  const onConfirm = () => {
    setShowModal(false);
  };

  const onCancel = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {showModal && (
        <Modal
          heading="Delete Account"
          message="Are you sure? This cannot be undone."
          onConfirm={onConfirm}
          onCancel={onCancel}
        ></Modal>
      )}
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
        <Button block danger onClick={() => setShowModal(true)}>
          Delete Account
        </Button>
      </Panel>
    </Fragment>
  );
}

export default Profile;
