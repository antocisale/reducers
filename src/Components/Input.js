import React, {useContext} from 'react';
import InputContext from '../InputContext';

const Input =()=>{
    const {setValue} = useContext(InputContext)
    
    return(
        <input type="text" onChange={e=>{setValue(e.target.value)}}/>
    )
}

export default Input;