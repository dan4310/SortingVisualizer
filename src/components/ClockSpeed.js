import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    InputBase,
    Grid
} from '@material-ui/core';

import SpeedIcon from '@material-ui/icons/Speed';
import { ParametersContext } from '../context/ParametersContext';

  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '4px 10px 4px 10px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    container: {
        display: 'flex',
        alignItems: 'center',
    }
  }));



const ClockSpeed = () => {
    const {speed, setSpeed} = useContext(ParametersContext);   

    const handleChange = (event) => {
        setSpeed(event.target.value);
    }

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <FormControl className={classes.margin}>
                <Grid container
                    alignContent='center'
                    alignItems='center'
                    spacing={1}
                >
                    <Grid item>
                        <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={speed}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        >
                        <MenuItem value={100}>
                            <em>1</em>
                        </MenuItem>
                        <MenuItem value={10}>2</MenuItem>
                        <MenuItem value={1}>3</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item>
                        <SpeedIcon 
                            color='secondary'
                            fontSize='large'
                        />
                    </Grid>
                </Grid>
                
        </FormControl>
        </div>
        
    )
}

export default ClockSpeed;