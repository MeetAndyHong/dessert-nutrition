import React from 'react';
import _ from 'lodash';
import './index.css';
import SortArrows from '../SortArrows';
import AppContext from '../../context/AppContext';

interface TableHeaderProps {
  columns: any[],
  sortConfig: any,
  setSortConfig: any,
  isAllSelected: boolean,
  toggleAllSelection: any,
}


function TableHeader({ columns, sortConfig, setSortConfig, isAllSelected, toggleAllSelection }: TableHeaderProps) {
  return (
    <div className="flex b thead mt3">
      {
        columns.map(item => (
          <div
            onClick={() => {
              const newSortConfig = {
                key: item.key,
                direction: 'asc'
              }
              if (sortConfig && sortConfig.key === item.key) {
                newSortConfig.direction = newSortConfig.direction === 'asc' ? 'desc' : 'asc';
              }
              setSortConfig(newSortConfig);
            }
        }
          data-key={item.key}
          className={`table-th ${item.className}`}
          key={item.key}
          >
            { item.type === 'checkbox' ? <input checked={isAllSelected} type="checkbox" onChange={toggleAllSelection} /> : item.name }
            {
              item.sortable && (
                <SortArrows
                  column={item}
                  sortConfig={sortConfig}
                />
              )
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
      ({ sortConfig, setSortConfig, isAllSelected, toggleAllSelection }) => 
      <TableHeader
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
        isAllSelected={isAllSelected}
        toggleAllSelection={toggleAllSelection}
        {...props} />
    }
  </AppContext.Consumer>
)
