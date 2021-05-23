import { Fragment, useState } from 'react';
import Button from '../components/Button';
import JournalItem from '../components/JournalItem';
import List from '../components/List';
import Modal from '../components/Modal';
import Panel from '../components/Panel';
import ToolBar from '../components/ToolBar';

const journals = [
  {
    id: 1,
    title: 'Spiffy Journal',
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 2,
    title: 'Dreams',
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 3,
    title: 'Favorite Movies',
    createdAt: new Date().toLocaleTimeString(),
  },
];

function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      {showModal && (
        <Modal
          heading="heading"
          message="msg"
          onConfirm={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
        ></Modal>
      )}
      <Panel>
        <ToolBar right>
          <Button success onClick={() => setShowModal(true)}>
            <i className="fas fa-plus"></i>
          </Button>
        </ToolBar>
        <List ordered>
          {journals.map((journal) => (
            <JournalItem
              key={journal.id}
              journal={journal}
              editHandler={() => console.log('edit')}
              deleteHandler={() => console.log('delete')}
            />
          ))}
        </List>
      </Panel>
    </Fragment>
  );
}

export default Dashboard;
