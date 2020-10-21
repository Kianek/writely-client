/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const containerStyles = (theme) => css`
  ${theme.colors.boxShadow}
  background-color: ${theme.colors.shadow};
  border-radius: 3px;
  margin: 1rem;

  &:hover {
    background-color: ${theme.colors.white};
    box-shadow: none;
    cursor: pointer;
  }
`;

const innerContainerStyles = (theme) => css`
  ${theme.flex.row}
  transform: translateY(-3px);

  &:hover {
    transform: translateY(3px);
  }
`;

const journalStyles = (theme) => css`
  a {
    text-decoration: none;
  }

  .journal-content {
    ${theme.flex.column}
    background-color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
    border: solid 1px ${theme.colors.lightGray};
    border-radius: 3px 0 0 3px;
    height: 50px;
    padding: 0.5rem;
    width: 200px;
  }
`;

const timesBtn = (theme) => css`
  background-color: rgba(${theme.colors.danger}, 0.3);
  border: solid 1px ${theme.colors.lightGray};
  border-left: none;
  border-radius: 0 3px 3px 0;
  color: ${theme.colors.darkGray};
  width: 40px;
  height: 50px;

  &:hover {
    background-color: ${theme.colors.danger};
    border: solid 1px ${theme.colors.danger};
    border-left: none;
    color: ${theme.colors.white};
    cursor: pointer;
  }
`;

function EditJournal({ journal, deleteHandler, modalHandler }) {
  return (
    <li css={containerStyles}>
      <div css={innerContainerStyles}>
        <div css={journalStyles}>
          <div className="journal-content" onClick={modalHandler}>
            <h4>{journal.title} </h4>
          </div>
        </div>
        <button css={timesBtn} onClick={() => deleteHandler(journal)}>
          <i className="fas fa-times" />
        </button>
      </div>
    </li>
  );
}

export default EditJournal;
