/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import classNames from 'classnames';

const inputGroup = (theme) => css`
  ${theme.container.block}
`;

const inputStyles = (theme) => css`
  border: solid 1px ${theme.colors.lightGray};
  border-radius: 3px;
  font-size: 1rem;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
`;

const labelStyles = (theme) => css`
  ${theme.container.block}
`;

function TextInput({ type, onChange, value, name, label, placeholder, block }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div
      css={inputGroup}
      className={classNames({ 'input-group': label, 'block': block })}
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
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default TextInput;
