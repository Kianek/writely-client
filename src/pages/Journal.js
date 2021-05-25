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

const entries = [
  {
    id: 1,
    title: 'Entry 1',
    tags: 'one,two,three',
    body: 'Blah',
  },
  {
    id: 2,
    title: 'Entry 2',
    tags: 'one,two,three',
    body: 'Blah',
  },
  {
    id: 3,
    title: 'Entry 3',
    tags: 'one,two,three',
    body: 'Blah',
  },
];

function Journal() {
  const [screenWidth, setScreenWidth] = useState(document.body.clientWidth);

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
