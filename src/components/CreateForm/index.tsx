import React, { useState } from 'react';
import classList from './classList';
import Button from '../Button';
import AppContext from '../../context/AppContext';
import InputRow from '../InputRow';
import './index.css';

interface CreateFormProps {
  onCreate?: any,
}


const CreateForm = ({ onCreate }: CreateFormProps) => {
  const [ name, setName ] = useState('');
  const [ calories, setCalories ] = useState('');
  const [ fat, setFat ] = useState('');
  const [ carb, setCarb ] = useState('');
  const [ protein, setProtein ] = useState('');
  return (
    <div className={classList.createForm}>
      <div className="mt2 ">
        Please fill all Fields
      </div>
      <InputRow
        value={name}
        name="dessert"
        label="Dessert *"
        onChange={setName}
      />
      <InputRow
        value={calories}
        name="calories"
        label="Calories *"
        onChange={setCalories}
        type="number"
      />
      <InputRow
        value={fat}
        name="fat"
        label="Fat *"
        onChange={setFat}
      />
      <InputRow
        value={carb}
        name="carb"
        label="Carbs *"
        onChange={setCarb}
        type="number"
      />
      <InputRow
        value={protein}
        name="protein"
        label="Protein *"
        onChange={setProtein}
        type="number"
      />
      <Button
        className="mt3"
        disabled={
          !name || !calories || !fat || !carb || !protein
        }
        onClick={() => {
          onCreate({
            name,
            calories,
            carb,
            fat,
            protein,
          })
        }}
      >
        Create
      </Button>
    </div>
  )
}

export default (props:any) => (
  <AppContext.Consumer>
    {
      ({ onCreate }) => 
      <CreateForm
        onCreate={onCreate}
        {...props} />
    }
  </AppContext.Consumer>
)
