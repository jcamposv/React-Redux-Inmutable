import React from 'react';
import injectSheet from 'react-jss';
import { Control } from 'react-redux-form';

// Styles
import styles from './styles';

type Props = {
  classes: Object,
  model: string,
  className: string,
  placeholder: string,
  id: string,
  type: string,
  icon: string,
}


function InputIcon({
  className = '',
  placeholder,
  classes,
  model,
  type,
  icon,
  id }:
  Props) {
  return (
    <div className={`${classes.inputIcon} ${className}`} >
      <span className={`icon ${icon}`} />
      <Control {...{
        type,
        model,
        id,
        placeholder,
        }}
      />
    </div>
  );
}

export default injectSheet(styles)(InputIcon);
