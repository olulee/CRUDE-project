import React from 'react';
import './FormInput.styles.css';
import { Field } from 'formik';

const FormInput = ({ label, ...otherprops }) => {
  return (
    <div className='form-group'>
      <label htmlFor=''>{label}</label>
      <br></br>
      <Field {...otherprops} />
    </div>
  );
};

export default FormInput;
