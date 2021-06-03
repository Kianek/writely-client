import { Fragment, useEffect, useState } from 'react';
import useNavigateTo from '../../hooks/useNavigateTo';
import useOutsideClick from '../../hooks/useOutsideClick';
import classNames from 'classnames';
import Button from '../Button';
import Column from '../Column';
import List from '../List';
import EntryItem from '../EntryItem';
import EntryView from '../EntryView';
import Row from '../Row';
import './journal-view-mobile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadEntries, selectEntryById } from '../../store/entries';
import {} from '../../store/journals';

function JournalViewMobile({ entries }) {
  const journal = useSelector((state) => state.journals.selectedJournal);
  const dispatch = useDispatch();
  const [menuActive, setMenuActive] = useState(null);
  const [entry, setEntry] = useState({});

  useEffect(() => {
    dispatch(loadEntries({ entries: journal.entries }));
    setEntry(entries[0]);
    console.log(entry);
  }, [journal, dispatch, setEntry, entry]);

  const toggleMenu = () => {
    if (menuActive === null) {
      setMenuActive(true);
    }

    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  // useOutsideClick('.entry-list', closeMenu);

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
        className={classNames('entry-list', {
          active: menuActive,
          inactive: menuActive === false && menuActive !== null,
        })}
      >
        <div className="content">
          <Column>
            <Button block success>
              New Entry
            </Button>
            <List>
              {entries.map((entry) => (
                <EntryItem key={entry.id} entry={entry} onClick={closeMenu} />
              ))}
            </List>
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
