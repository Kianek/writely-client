/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const styles = (theme) => css`
  position: absolute;
  background-color: ${theme.colors.primary};
  border-radius: 0 0 3px 3px;
  right: 10%;
  top: 100%;
  width: 200px;
  z-index: 1001;
`;

function Menu({ showMenu, children }) {
  return (
    showMenu && (
      <div id="dropdown-menu" css={styles}>
        {children}
      </div>
    )
  );
}

export default Menu;
