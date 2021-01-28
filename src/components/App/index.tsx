import React, { Component } from 'react';
import _ from 'lodash';
import Table from '../Table';
import classList from './classList';
import Button from '../Button';
import AppContext from '../../context/AppContext';
import Modal from '../Modal';
import data from './data';
import CreateForm from '../CreateForm';
import { addDessert, deleteDessert } from "../../services/dessert";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      sortConfig: null,
      selectedItems: [],
      data,
      selectedItemsMap: {},
      setSortConfig: this.setSortConfig,
      toggleSelection: this.toggleSelection,
      toggleAllSelection: this.toggleAllSelection,
      isShowModal: false,
      onCreate: this.handleCreateSubmit
    };
  }

  componentDidMount() {
    this.setState({
      data
    });
  }

  toggleSelection = (item:any) => {
    const { selectedItems, selectedItemsMap, data } = this.state;
    const newSelectedItems = [...selectedItems];
    const newSelectedItemsMap = {
      ...selectedItemsMap
    };
    const index = selectedItems.indexOf(item.id);
    if(index !== -1) {
      newSelectedItems.splice(index, 1);
      newSelectedItemsMap[item.id] = false;
    } else {
      newSelectedItems.push(item.id);
      newSelectedItemsMap[item.id] = true;
    }
    this.setState({
      selectedItems: newSelectedItems,
      selectedItemsMap: newSelectedItemsMap,
      isAllSelected: this.checkAllSelected({ selectedItems: newSelectedItems, data }),
    });
  }

  checkAllSelected = ({
    selectedItems,
    data
  }: any) => selectedItems.length === data.length;

  setSortConfig = (sortConfig: any) => {
    this.setState({
      sortConfig
    });
  }

  handleReset = () => {
    this.setState({
      sortConfig: null,
      selectedItems: [],
      selectedItemsMap: {},
      isAllSelected: false,
    });
  }

  toggleAllSelection = () => {
    const { isAllSelected, data } = this.state;
    const selectedItems:any[] = [];
    const selectedItemsMap:any = {};
    if (!isAllSelected) {
      _.each(data, (item) => {
        selectedItems.push(item.id);
        selectedItemsMap[item.id] = true;
      });
    }
    this.setState({
      selectedItems,
      selectedItemsMap,
      isAllSelected: !isAllSelected
    });
  }

  handleDelete = () => {
    deleteDessert()
    .then(() => {
      const { selectedItemsMap, data } = this.state;
      const newData:any[] = [];
      _.each(data, item => {
        if (!selectedItemsMap[item.id]) {
          newData.push(item);
        }
      });
      this.setState({
        selectedItemsMap: {},
        selectedItems: [],
        data: newData,
        isAllSelected: false,
      });
    });
  }

  closeForm = () => {
    this.setState({
      isShowModal: false
    });
  }

  handleCreateSubmit = (reqData) => {
    addDessert(reqData)
    .then((res) => {
      const { data, selectedItems } = this.state;
      const newData = [...data, res];
      this.setState({
        isShowModal: false,
        data: newData,
        isAllSelected: this.checkAllSelected({
          data: newData,
          selectedItems
        })
      });
    });
  }

  openCreateForm = () => {
    this.setState({
      isShowModal: true,
    });
  }

  render() {
    const { sortConfig, selectedItems, isShowModal, data } = this.state;
    return (
      <AppContext.Provider value={this.state}>
        <div className={classList.container}>
            <div className={classList.appTitleBar}>
              <div className={classList.appTitle}>Nutrition List</div>
              { !!data.length && <Button onClick={this.handleReset} disabled={!(sortConfig || selectedItems.length !== 0)}>Reset</Button> }
            </div>
            {
              !!data.length && (
              <div className={classList.featureButtonWrapper}>
                <div>
                  Select
                  {
                    !!selectedItems.length && <span>({selectedItems.length})</span>
                  }
                </div>
                <div>
                  <Button onClick={this.openCreateForm}>Add New</Button>
                  <Button onClick={this.handleDelete} disabled={!selectedItems.length} className="ml3">Delete</Button>
                </div>
              </div>
              )
            }
            {
              data.length === 0 && (
                <div className="tc mt">
                  <p>Please add item in desset list</p>
                  <Button onClick={this.openCreateForm}>Add New</Button>
                </div>
              )
            }
            { !!data.length && <Table /> }
            {
              isShowModal && (
                <Modal onClose={this.closeForm}>
                  <CreateForm />
                </Modal>
              )
            }
        </div>
      </AppContext.Provider>
    );
  } 
}

export default App;
