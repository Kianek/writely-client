import { Fragment, useEffect, useState } from 'react';
import useNavigateTo from '../../hooks/useNavigateTo';
import useOutsideClick from '../../hooks/useOutsideClick';
import classNames from 'classnames';
import Button from '../Button';
import Column from '../Column';
import EntryView from '../EntryView';
import Row from '../Row';
import './journal-view-mobile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadEntries } from '../../store/entries';
import EntryList from '../EntryList';

function JournalViewMobile({ entries }) {
  const dispatch = useDispatch();
  const journal = useSelector((state) => state.journals.selectedJournal);
  const [menuActive, setMenuActive] = useState(null);
  const [entry, setEntry] = useState({});

  useEffect(() => {
    dispatch(loadEntries({ entries: journal.entries }));
    if (entries && entries[0]) {
      setEntry(entries[0]);
    }
    console.log(entry);
  }, [journal, dispatch, setEntry, entry]);

  const toggleMenu = () => {
    if (menuActive === null) {
      setMenuActive(true);
    }

    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    if (!menuActive) {
      return;
    }
    setMenuActive(false);
  };

  useOutsideClick('#sidebar', closeMenu);

  return (
    <Fragment>
      <Row className="toolbar" spaceAround>
        <Button circle info onClick={useNavigateTo('/dashboard')}>
          <i className="fas fa-book" />
        </Button>
        <Button circle info onClick={toggleMenu}>
          <i className={`fas fa-${menuActive ? 'times' : 'bars'}`} />
        </Button>
      </Row>
      <div
        id="sidebar"
        className={classNames({
          active: menuActive,
          inactive: menuActive !== null && menuActive === false,
        })}
      >
        <div className="content">
          <Column>
            <Button block success>
              New Entry
            </Button>
            <EntryList entries={entries} height="90vh" />
          </Column>
        </div>
      </div>
      <div id="jv-mobile" data-testid="jv-mobile">
        <Column>
          <EntryView entry={entry} />
        </Column>
      </div>
    </Fragment>
  );
}

export default JournalViewMobile;
