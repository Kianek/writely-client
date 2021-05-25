import classNames from 'classnames';
import { Fragment, useState } from 'react';
import useNavigateTo from '../../hooks/useNavigateTo';
import Button from '../Button';
import Column from '../Column';
import EntryList from '../EntryList';
import EntryView from '../EntryView';
import Row from '../Row';
import './journal-view-mobile.scss';

function JournalViewMobile({ entries }) {
  const [menuActive, setMenuActive] = useState(null);
  const [entry, setEntry] = useState({
    title: 'Blah',
    tags: 'one,two,three',
    body: 'Some stuff',
  });

  const toggleMenu = () => {
    if (menuActive === null) {
      setMenuActive(true);
    }

    setMenuActive(!menuActive);
  };

  return (
    <Fragment>
      <Row className="toolbar" spaceAround>
        <Button info onClick={useNavigateTo('/dashboard')}>
          <i className="fas fa-book" />
        </Button>
        <Button info onClick={toggleMenu}>
          <i className={`fas fa-${menuActive ? 'times' : 'bars'}`} />
        </Button>
      </Row>
      <div
        className={classNames('entry-list', {
          active: menuActive,
          inactive: menuActive === false && menuActive !== null,
        })}
      >
        <EntryList entries={entries} />
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
