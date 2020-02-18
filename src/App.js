import React, {useState, useReducer} from 'react';

import './App.css';

const reducer = (state,action) =>{
  switch(action.type){
    case "saveName":
      return {...state, name: action.payload};
    case "saveEmail":
      return {...state,email: action.payload};
    case "saveUser":
      return {...state,user: action.payload};
    default:
      return state;
  }
};

const App =()=> {
  const [name,setName] = useState("");
  const [user,setUser] = useState("");
  const [email,setEmail] = useState("");

  const [state,dispatch] = useReducer(reducer,{name:"",user:"",email:""});

  const saveName = ()=>{
    dispatch({type: "saveName", payload: name});
  }
  const saveEmail = () =>{
    dispatch({type:"saveEmail", payload: email});
  }
  const saveUser = () =>{
    dispatch({type:"saveUser", payload: user});
  }

  return (
    <div className="container">
      <div>
      <input type="text" onChange={e=>{setName(e.target.value)}}/>
      <button onClick={saveName}>Save Name</button>
      </div>
      <div>
      <input type="text" onChange={e=>{setUser(e.target.value)}}/>
      <button onClick={saveUser}>Save User</button>
      </div>
      <div>
      <input type="email" onChange={e=>{setEmail(e.target.value)}}/>
      <button onClick={saveEmail}>Save Email</button>
      </div>
      <div classname="container">
        <div>Nombre: {state.name}</div>
        <div>User: {state.user}</div>
        <div>Email: {state.email}</div>

      </div>
    </div>
  );
}

export default App;
