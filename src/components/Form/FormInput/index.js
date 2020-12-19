import React from 'react';
import './styles.scss';

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="formRow">
      {label && <label>{label}</label>}

      <input
        type="text"
        className="formInput"
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
