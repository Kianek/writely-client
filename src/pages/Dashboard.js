import { Fragment, useState } from 'react';
import Button from '../components/Button';
import JournalItem from '../components/JournalItem';
import List from '../components/List';
import Modal from '../components/Modal';
import Panel from '../components/Panel';
import TextInput from '../components/TextInput';
import Row from '../components/Row';
import { useSelector } from 'react-redux';
import { selectJournals } from '../store/journals';
import { setState } from '../utils';

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const journals = useSelector(selectJournals);

  console.log(journals);
  const closeModal = () => setShowModal(false);

  const toggleEditMode = () => setEditMode(!editMode);

  const onConfirm = () => {
    closeModal();
  };

  const onCancel = () => {
    setNewTitle('');
    closeModal();
  };

  const onConfirmEdit = () => {
    setNewTitle('');
    closeModal();
  };

  const newJournalModal = (
    <Modal
      heading="Create a New Journal"
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      <h2>Name it something nice</h2>
      <TextInput
        onChange={setState(setNewTitle)}
        placeholder="Title"
        value={newTitle}
      />
    </Modal>
  );

  const editJournalModal = (
    <Modal
      heading="Rename Journal"
      onConfirm={onConfirmEdit}
      onCancel={onCancel}
    >
      <h2>Give it a better name than before</h2>
      <TextInput
        onChange={setState(setNewTitle)}
        placeholder="Updated Title"
        value={newTitle}
      />
    </Modal>
  );

  return (
    <Fragment>
      {showModal && (editMode ? editJournalModal : newJournalModal)}
      <Panel>
        <Row right>
          <Button circle info onClick={toggleEditMode} toggled={editMode}>
            <i className="fas fa-edit"></i>
          </Button>
          <Button circle success onClick={showModal} disabled={editMode}>
            <i className="fas fa-plus"></i>
          </Button>
        </Row>
        <List ordered>
          {journals.map((journal) => (
            <JournalItem
              key={journal.id}
              journal={journal}
              editMode={editMode}
              editHandler={() => setShowModal(true)}
            />
          ))}
        </List>
      </Panel>
    </Fragment>
  );
}

export default Dashboard;
