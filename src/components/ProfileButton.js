import React from 'react';
import Button from './Button';
import '../styles/_buttons.scss';

function ProfileButton({ toggled, onClick }) {
  return (
    <Button flat toggled={toggled} onClick={onClick}>
      <i className="fas fa-user" />
    </Button>
  );
}

export default ProfileButton;
