import React from 'react';

interface AppContextValues {
    sortConfig?: any,
    setSortConfig?: any,
    selectedItems?: any,
    selectedItemsMap: any,
    toggleSelection?: any,
    toggleAllSelection?: any,
    isAllSelected?: any,
    data?: any[],
    onCreate?: any
}
const AppContext = React.createContext<Partial<AppContextValues>>({
    sortConfig: null,
    setSortConfig: () => {},
    selectedItems: [],
    selectedItemsMap: {},
    toggleSelection: () => {},
    data: [],
    onCreate: () => {}
});

export default AppContext;
  