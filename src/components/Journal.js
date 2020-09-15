import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_journal.scss';

function Journal({ journal }) {
  return (
    <li className="journal">
      <Link to={`/journal/${journal.id}`}>
        <div className="journal-content">
          <h3>{journal.title}</h3>
        </div>
      </Link>
    </li>
  );
}

export default Journal;
