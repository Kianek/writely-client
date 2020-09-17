import React from 'react';
import Button from './Button';

function ProfileButton({ toggled, onClick }) {
  return (
    <Button id="profile-button" flat toggled={toggled} onClick={onClick}>
      <i className="fas fa-user" />
    </Button>
  );
}

export default ProfileButton;
