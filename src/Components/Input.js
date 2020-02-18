import React from 'react';

const Input =({changeValue})=>{
    return(
        <input type="text" onChange={e=>{changeValue(e.target.value)}}/>
    )
}

export default Input