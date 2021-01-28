import React from 'react';
import _ from 'lodash';
import './index.css';
import AppContext from '../../context/AppContext';

interface TableRowProps {
  columns: any[],
  data: any,
  toggleSelection: any,
  selectedItemsMap: any
  selectedItems: any
};

function TableRow({ columns, data, selectedItemsMap, toggleSelection }: TableRowProps) {
  return (
    <div className="flex table-tr">
      {
        columns.map(item => (
          <div key={item.key} className={`table-td ${item.className}`}>
            {
              item.type === 'checkbox' ?
              <input
                type="checkbox"
                checked={selectedItemsMap[data.id]}
                onChange={() => {
                  toggleSelection(data);
                }}
              />
              :
              _.get(data, item.key)
            }
          </div>
        ))
      }
    </div>
  );
}

export default (props:any) => (
  <AppContext.Consumer>
    {
      ({ toggleSelection, selectedItemsMap, selectedItems }) => (
        <TableRow
          toggleSelection={toggleSelection}
          selectedItemsMap={selectedItemsMap}
          {...props}
        />
      )
    }
  </AppContext.Consumer>
);
