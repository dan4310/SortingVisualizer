import React, { useContext } from 'react';
import {
    Button,
    Typography
} from '@material-ui/core';
import { ParametersContext } from '../context/ParametersContext';
import { Cancel as CancelIcon } from '@material-ui/icons';




const Cancel = () => {
    const {setIsSorting, isSorting, setArray, array} = useContext(ParametersContext); 
    
    const onCancel = () => {
        var id = window.setTimeout(function() {}, 0);
        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }

        setIsSorting(false);
        setArray(array.slice().sort((a,b) => a.value-b.value));
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < arrayBars.length; i++) {
            arrayBars[i].style.backgroundColor = 'blue';
        }
    }
    
    return (
        
        isSorting && 
            <Button variant='contained' 
                onClick={onCancel}
                startIcon={<CancelIcon/>}
            >
                <Typography variant='subtitle2'>
                    Cancel
                </Typography>
            </Button> 
    )
}

export default Cancel;