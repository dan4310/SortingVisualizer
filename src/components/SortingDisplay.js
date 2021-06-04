import React, { useContext } from 'react';
import {Box,
        Paper,
        Grid,
        Typography,
} from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';
import {ParametersContext} from '../context/ParametersContext';

const useStyles = makeStyles((theme) => ({
    container: {
      flexGrow: 1,
    }
  }));

const SortingDisplay = () => {
    const classes = useStyles();
    const {array, bins} = useContext(ParametersContext);

    return (
        <Box variant='span' className={classes.container}>
            <Grid container spacing={1}
                align = "center" 
                justify = "center" 
            >
                {
                    array.map(item => {
                        return (
                            <Grid item>
                                <Box bgcolor='secondary.light' color='white' height={0.05*item} width={3}></Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default SortingDisplay;