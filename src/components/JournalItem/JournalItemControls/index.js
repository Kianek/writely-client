import { Fragment } from 'react';

function JournalItemControls({
  editMode,
  editHandler,
  toggleEditMode,
  deleteHandler,
}) {
  return (
    <div data-testid="controls" className="controls">
      {editMode ? (
        <Fragment>
          <button className="edit" onClick={editHandler}>
            <i className="fas fa-check"></i>
          </button>
          <button className="delete" onClick={toggleEditMode}>
            <i className="fas fa-times"></i>
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <button className="edit" onClick={editHandler}>
            <i className="fas fa-edit"></i>
          </button>
          <button className="delete" onClick={deleteHandler}>
            <i className="fas fa-trash"></i>
          </button>
        </Fragment>
      )}
    </div>
  );
}

export default JournalItemControls;
