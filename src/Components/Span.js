import React, {useContext} from 'react';
import InputContext from '../InputContext'

const Span = ()=>{
    const {value} = useContext(InputContext);
    return(
        <span>{value}</span>
    )
}
export default Span;