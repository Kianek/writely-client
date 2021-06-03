import { Fragment, useEffect, useState } from 'react';
import Button from '../components/Button';
import Column from '../components/Column';
import EntryList from '../components/EntryList';
import EntryView from '../components/EntryView';
import Row from '../components/Row';
import ToolBar from '../components/ToolBar';
import useNavigateTo from '../hooks/useNavigateTo';
import JournalViewDesktop from '../components/JournalViewDesktop';
import JournalViewMobile from '../components/JournalViewMobile';
import { useSelector } from 'react-redux';

function Journal() {
  const [screenWidth, setScreenWidth] = useState(document.body.clientWidth);
  const entries = useSelector((state) => state.entries.entries);

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
    <JournalViewDesktop entries={entries} />
  ) : (
    <JournalViewMobile entries={entries} />
  );
}

export default Journal;
