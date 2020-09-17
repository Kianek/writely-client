/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const styles = (theme) => css`
  background-color: ${theme.colors.shadow};
  border-radius: 3px;
  margin: 1rem;

  a {
    text-decoration: none;
  }

  .journal-content {
    ${theme.flex.column}
    background-color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
    border: solid 1px ${theme.colors.lightGray};
    border-radius: 3px;
    height: 50px;
    width: 200px;
  }

  &:hover {
    ${theme.colors.boxShadow}
    cursor: pointer;
  }

  &:hover .journal-content {
    transform: translateY(-3px);
  }
`;

function Journal({ journal }) {
  return (
    <li css={styles}>
      <Link to={`/journal/${journal.id}`}>
        <div className="journal-content">
          <h3>{journal.title}</h3>
        </div>
      </Link>
    </li>
  );
}

export default Journal;
