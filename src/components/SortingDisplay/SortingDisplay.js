import React, { useContext } from 'react';
import { ParametersContext } from '../../context/ParametersContext';
import './SortingDisplay.css';

const SortingDisplay = () => {
    const {array, bins} = useContext(ParametersContext);   
    
    return (
        <div className='array-container'>
            {
                array.map((item, indx) => {
                    return (
                        <div
                            className='array-bar'
                            key={indx}
                            style={{height: `${item.value}%`, width: `${(window.innerWidth/(bins + bins))}px`}}></div>
                    )
                })
            }
        </div>
    )
}

export default SortingDisplay;