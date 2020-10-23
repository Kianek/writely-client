/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Paragraph from './Paragraph';
import HorizontalRule from './HorizontalRule';
import { useDispatch } from 'react-redux';
import { selectEntry } from '../data/entries/entriesSlice';

const styles = (theme) => css`
  ${theme.flex.column}
  background-color: ${theme.colors.white};
  border: solid 1px ${theme.colors.lightGray};
  border-radius: 3px;
  align-items: center;
  margin: 0 auto 0.5rem;
  padding: 0.5rem;
  overflow-x: hidden;

  &:hover {
    ${theme.colors.boxShadow}
    background-color: ${theme.colors.white};
    border: solid 1px ${theme.colors.lightGray};
    border-radius: 3px;
    cursor: pointer;
    transform: translateY(-3px);
  }
`;

function Entry({ entry }) {
  const dispatch = useDispatch();

  return (
    <li css={styles} id="entry" onClick={() => dispatch(selectEntry(entry))}>
      <div>
        <h4>{entry.title}</h4>
        <HorizontalRule />
        <Paragraph small>{entry.lastModified}</Paragraph>
      </div>
    </li>
  );
}

export default Entry;
