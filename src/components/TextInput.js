import React, { useState } from 'react';
import classNames from 'classnames';
import '../styles/_input.scss';

function TextInput({ type, onChange, value, name, label, placeholder, block }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={classNames({ 'input-group': label, 'block': block })}>
      {label && <label for={name}>{label}</label>}
      <input
        data-testid="textInput"
        className={classNames({ 'block': block })}
        name={name}
        type={type ? type : 'text'}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default TextInput;
