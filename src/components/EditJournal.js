/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const styles = (theme) => css`
  ${theme.colors.boxShadow}
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
    padding: 0.5rem;
    transform: translateY(-3px);
    width: 200px;
  }

  &:hover {
    background-color: ${theme.colors.white};
    box-shadow: none;
    cursor: pointer;
    transform: translateY(3px);
  }
`;

const timesBtn = (theme) => css`
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkGray};
  padding: 0.25rem;

  &:hover {
    color: ${theme.colors.danger};
    cursor: pointer;
  }
`;

function EditJournal({ journal, deleteHandler, updateHandler }) {
  return (
    <li css={styles}>
      <div className="journal-content" onClick={updateHandler}>
        <h4>
          {journal.title}{' '}
          <i onClick={deleteHandler} css={timesBtn} className="fas fa-times" />
        </h4>
      </div>
    </li>
  );
}

export default EditJournal;
