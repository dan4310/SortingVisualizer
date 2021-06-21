import React, { useContext } from 'react';
import { ParametersContext } from '../context/ParametersContext';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,
        } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    textStyle: {
        marginBottom: '5rem',
        fontStyle: 'italic',
        fontSize: '20px',
        color: 'red',
    }
}));
const Performance = () => {
    const classes = useStyles();
    const {functionPerformance} = useContext(ParametersContext);

    if (functionPerformance <= 0) {
        return (
            <></>
        );
    }

    return (
        <Typography color="secondary" class={classes.textStyle}>
            {"Sorted in " + functionPerformance.toFixed(3) + " milliseconds"}
        </Typography>
    )
}

export default Performance;