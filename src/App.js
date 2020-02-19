import React, {useState, createContext} from 'react';

import './App.css';
import Input from './Components/Input';
import Div from './Components/Div';
import InputContext from './InputContext';


const App =()=> {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <InputContext.Provider value={
        {
          value,
        setValue
        }
      }>
      <Input></Input>
      <Div></Div>
      </InputContext.Provider>
    </div>
  );
}

export default App;
// tres componentes
// un componente hijo de app con un input
// otro componente hijo de app que es un objeto contenedor (hermano del otro componente)
// un componente con un span dentro del componente 2 

// contexto - inputContext, que va a tener 2 valores: 1er: "value", 2do: "changeValue"
// Desde el componente con el input hay que cambiar el value