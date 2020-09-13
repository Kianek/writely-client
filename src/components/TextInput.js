import React, { useState } from 'react';

function TextInput(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <input
      type={props.type ? props.type : 'text'}
      data-testid="textInput"
      onChange={handleChange}
      value={props.inputValue}
    />
  );
}

export default TextInput;
