/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const styles = (theme) => css`
  ${theme.flex.column}
  align-self: center;
  align-items: center;
  padding: 1rem;
  width: 300px;
`;

function Form(props) {
  return (
    <form css={styles} onSubmit={props.onSubmit} data-testid="formComponent">
      {props.children}
    </form>
  );
}

export default Form;
