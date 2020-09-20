/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import classNames from 'classnames';
import Paragraph from './Paragraph';
import { debounce } from 'lodash';
import { validationExecutor } from '../validation';

const inputGroup = (theme) => css`
  ${theme.container.block}
`;

const inputStyles = (theme) => css`
  ${theme.container.block}
  border: solid 1px ${theme.colors.lightGray};
  border-radius: 3px;
  font-size: 1rem;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
`;

const labelStyles = (theme) => css`
  ${theme.container.block}
`;

function TextInput({
  type,
  onChange,
  value,
  name,
  label,
  placeholder,
  block,
  rules,
  errorState,
}) {
  const [errors, setErrors] = useState('');
  const debouncedRules = debounce(() =>
    setErrors(validationExecutor(value, rules), 500)
  );

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const executeRules = () => {
    if (rules) {
      debouncedRules();

      if (errorState) {
        errors ? errorState(true) : errorState(false);
      }
    }
  };

  return (
    <div
      css={inputGroup}
      className={classNames({ 'input-group': label, block })}
    >
      {label && (
        <label css={labelStyles} for={name}>
          {label}
        </label>
      )}
      <input
        data-testid="textInput"
        css={inputStyles}
        className={classNames({ 'block': block })}
        name={name}
        type={type ? type : 'text'}
        onChange={handleChange}
        onKeyUp={executeRules}
        placeholder={placeholder}
        value={value}
      />
      <Paragraph danger small>
        {errors}
      </Paragraph>
    </div>
  );
}

export default TextInput;
