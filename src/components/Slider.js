import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import BarChart from '@material-ui/icons/BarChart';

import { ParametersContext } from '../context/ParametersContext';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const {bins, setBins} = useContext(ParametersContext);

  const handleChange = (event, newValue) => {
    setBins(newValue);
  };

  return (
    <div className={classes.root}>

      <Grid container spacing={2}>
        <Grid item>
            <Typography>
                {bins}
            </Typography>
        </Grid>

        <Grid item xs>
          <Slider value={bins} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>

        <Grid item>
            <BarChart/>
        </Grid>
      </Grid>
    </div>
  );
}