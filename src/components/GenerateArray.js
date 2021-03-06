import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ParametersContext } from '../context/ParametersContext';


const useStyles = makeStyles((theme) => ({
    btn: {
        display: 'flex',
        alignSelf: 'center',
        padding: 10,
    }
  }));

const GenerateArray = () => {
    const classes = useStyles();
    const {newArray, isSorting, setPerformance} = useContext(ParametersContext);

    return (
        !isSorting &&
        <Button variant={isSorting ? 'disabled' : 'contained'} className={classes.btn}
            color='primary'
            onClick={() => {
                newArray();
                setPerformance(-1);
            }}
        >
            <Typography variant='subtitle2'>
                Generate New Array
            </Typography>
        </Button>
    )
}

export default GenerateArray;