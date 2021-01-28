import React from 'react';
import _ from 'lodash';
import './index.css';
import TableRow from '../TableRow';
import AppContext from '../../context/AppContext';

interface TableBodyProps {
  columns: any[],
  data: any[],
  sortConfig: any,
};

function TableBody({ columns, data, sortConfig }: TableBodyProps) {
  let tdata = data;
  if (sortConfig) {
    tdata = _.orderBy(data, sortConfig.key, [sortConfig.direction]);
  }
  return (
    <div className="tbody">
      {
        tdata.map(item => <TableRow key={item.Dessert} columns={columns} data={item} />)
      }
    </div>
  );
}

export default (props:any) => (
  <AppContext.Consumer>
    {
      ({ sortConfig, data }) => <TableBody sortConfig={sortConfig} data={data} {...props} />
    }
  </AppContext.Consumer>
);
