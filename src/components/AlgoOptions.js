import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { ParametersContext } from '../context/ParametersContext';


const algorithims = ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Heap Sort'];

const useStyles = makeStyles((theme) => ({
    grid: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }
  }));

const AlgoOptions = () => {
    const classes = useStyles();

    const {algo, setAlgo, bubble, isSorting, quickSort} = useContext(ParametersContext);

    return (
        <Grid container className={classes.grid} spacing={2}>
            {
                algorithims.map(a => {
                    return (
                        <Grid item>
                            <Button variant={ isSorting ? (algo === a ? 'contained' : 'disabled') : 'outlined'}
                                color={(isSorting && algo === a) ? 'secondary' : 'default'}
                                onClick={() => {
                                    setAlgo(a);
                                    switch (a) {
                                        case 'Bubble Sort':
                                            bubble();
                                            break;
                                        case 'Quick Sort':
                                            quickSort();
                                            break
                                    }
                                          
                                }}
                            >
                                <Typography variant='caption'>
                                    {a}
                                </Typography>
                            </Button>
                        </Grid>
                    )
                })
            }
        </Grid>
        
    )
}

export default AlgoOptions;