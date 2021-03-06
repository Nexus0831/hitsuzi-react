// node_modules
import React from 'react';

import {
  ValidateError
} from './cssinjs';


// pure function
const Input = (props) => {
  return (
    <span
      id="input"
    >
      <input
        placeholder={props.placeholder}
        value={props.input.value}
        label={props.label}
        onBlur={() => props.input.onBlur(props.value)}
        onChange={props.input.onChange}
        style={props.style}
        className={props.className}
        type={props.type}
        size={props.size}
      />
      {
        props.meta.touched
        && props.meta.error
        && <ValidateError>{props.meta.error}</ValidateError>
      }
    </span>
  );
};

export default Input;
