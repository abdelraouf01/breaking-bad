import React from 'react';
import classes from './Spinner.module.css';
const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes.doubleBounce1}></div>
      <div className={classes.doubleBounce2}></div>
    </div>
  );
};

export default Spinner;
