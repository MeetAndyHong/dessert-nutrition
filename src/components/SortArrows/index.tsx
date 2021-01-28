import React from 'react';
import _ from 'lodash';
import cs from 'classnames';
import './index.css';

interface SortArrowProps {
  sortConfig: any,
  column: any,
}

const SortArrow = ({ sortConfig, column }: SortArrowProps) => {
    console.log('sortConfig....', sortConfig);
  return (
    <span className="sort-arrows">
      <span
        className={
          cs("sort-arrow sort-arrow-down", {
            'active-arrow': sortConfig && _.get(sortConfig, 'key') === column.key && sortConfig.direction === 'desc'
          })
        }
      >&#8595;</span>
      <span
        className={
          cs("sort-arrow sort-arrow-up", {
            'active-arrow': sortConfig && _.get(sortConfig, 'key') === column.key && sortConfig.direction === 'asc'
          })
        }
      >&#8593;</span>
    </span>
  )
}

export default SortArrow;