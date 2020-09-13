import React from 'react';
import '../styles/_forms.scss';

function Form(props) {
  return (
    <form onSubmit={props.onSubmit} data-testid="formComponent">
      {props.children}
    </form>
  );
}

export default Form;
