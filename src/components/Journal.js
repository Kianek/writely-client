/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectJournal } from '../data/journals/journalsSlice';

const liStyles = css`
  margin: 1rem;
`;

const buttonStyles = (theme) => css`
  margin: 1rem;
  background-color: ${theme.colors.shadow};
  border: none;
  border-radius: 3px;
  outline: none;

  &:hover {
    ${theme.colors.boxShadow}
    cursor: pointer;
  }

  &:hover .journal-content {
    transform: translateY(-3px);
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
`;

function Journal({ journal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const goToJournal = () => {
    dispatch(selectJournal(journal));
    history.push(`journal/${journal.id}`);
  };

  return (
    <li css={liStyles}>
      <button css={buttonStyles} onClick={goToJournal}>
        <div className="journal-content">
          <h4>{journal.title}</h4>
        </div>
      </button>
    </li>
  );
}

export default Journal;
