import React from 'react';
import '../styles/_layout.scss';

function Page({ children }) {
  return <div className="page">{children}</div>;
}

export default Page;
