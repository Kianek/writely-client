/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import EntryList from '../components/EntryList';
import EntryView from '../components/EntryView';
import { useSelector } from 'react-redux';

const styles = (theme) => css`
  ${theme.flex.row}
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
  width: 100%;
`;

function JournalView() {
  const selectedJournal = useSelector(
    (state) => state.journals.selectedJournal
  );
  const entries = useSelector((state) => state.entries.entries);

  return (
    <div css={styles}>
      <EntryList entries={entries} />
      <EntryView journal={selectedJournal} />
    </div>
  );
}

export default JournalView;
