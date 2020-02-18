import React, {useContext} from 'react';
import Span from './Span';
import InputContext from '../InputContext';

const Div = ()=>{
    const {value} = useContext(InputContext);
    return(
        <div className="div">
            <Span value={value}></Span>
        </div>
    )
}
export default Div;