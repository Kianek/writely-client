import React from 'react';
import '../styles/_journal.scss';

function Journal({ title }) {
  return (
    <li className="journal">
      <div className="journal-content">
        <h3>{title}</h3>
      </div>
    </li>
  );
}

export default Journal;
