import React from 'react';
import TableHeader from '../TableHeader';
import columns from './columns';
import TableBody from '../TableBody';
import './index.css';

function Table() {
  return (
    <div>
      <TableHeader columns={columns} />
      <TableBody columns={columns} />
    </div>
  );
}

export default Table;
