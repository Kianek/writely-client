import { useEffect, useState } from 'react';
import JournalViewDesktop from '../components/JournalViewDesktop';
import JournalViewMobile from '../components/JournalViewMobile';
import { useSelector } from 'react-redux';

function Journal() {
  const journal = useSelector((state) => state.journals.selectedJournal);
  const [selectedEntry, setSelectedEntry] = useState({});
  const [screenWidth, setScreenWidth] = useState(document.body.clientWidth);

  useEffect(() => {
    setSelectedEntry(journal.entries[0]);
  }, [selectedEntry, setSelectedEntry]);

  useEffect(() => {
    const resizeWindow = () => {
      setScreenWidth(document.body.clientWidth);
    };

    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, [screenWidth]);

  return screenWidth >= 700 ? (
    <JournalViewDesktop entries={journal.entries} />
  ) : (
    <JournalViewMobile entries={journal.entries} />
  );
}

export default Journal;
