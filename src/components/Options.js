import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Slider from './Slider';
import GenerateArray from './GenerateArray';
import AlgoOptions from './AlgoOptions';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 20,
        display: 'flex'
    },
    item: {
      paddingRight: 40,
    },
  }));

const Options = () => {
    const classes = useStyles();

    return (
        <Box component='span' className={classes.root}>
            <Grid container 
                align = "center" 
                justify = "center" 
                alignItems = "center"
                spacing= {5}
                xs={12}
            >
                <Grid item>
                    <GenerateArray className={classes.item}/>
                </Grid>

                <Grid item>
                    <Slider className={classes.item}/>
                </Grid>

                <Grid item>
                    <AlgoOptions className={classes.item}/>
                </Grid>
                
            </Grid>
            
        </Box>
    )
}

export default Options;