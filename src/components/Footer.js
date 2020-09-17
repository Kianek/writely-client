/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const styles = (theme) => css`
  background-color: ${theme.colors.primary};
  padding: 1rem;
  margin-top: auto;
  text-align: center;
`;

function Footer() {
  return (
    <footer css={styles}>
      Copyright &copy; {new Date().getFullYear()} Writely{' '}
    </footer>
  );
}

export default Footer;
