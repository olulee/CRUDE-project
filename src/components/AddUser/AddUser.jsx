import React, { useMemo, useState } from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Loader from "react-loader-spinner";
import FormInput from '../inputs/FormInput';
// import countryList from 'react-select-country-list';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../store/action/userAction';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    // const [value, setValue] = useState('')
    const users = useSelector(state=>state)
  console.log(users)
    const dispatch = useDispatch()
    const history = useHistory()
    // const options = useMemo(() => countryList().getData(), [])
  return (
    <div className='cont-wrapper'>
        <div className='add_form_user '>
            <div className='form_wrapper'>
           <h4>Welcome to Oluleye Crud App</h4> 
           <p>Please create user</p>
           <Formik initialValues= {{

    name: '',

    email: '',

    title:'',

    description:'',
    created_at : new Date()

    }} 
    validationSchema={yup.object({

    name:yup.string().max(25,'Name should not exceed 20 Characters').

    required('Please Enter Your Name'),

    email: yup.string()

    .email('Invalid email address')

    .required('Please Enter Email Address'),
    title: yup.string()
    .required("please enter Title")
    ,
    description: yup.string()
    .required("please enter description")
    .min(8, "Description must be at least 8 character"),
    status: yup.string()
    .required("please Select Status"),
    address: yup.string()
    .required("please enter address")

    })} 
    onSubmit= {async values => {
        // alert(JSON.stringify(values))
        // setLoading(true)
        await dispatch(createUser(values));
        history.push('/')
        // setLoading(false)

    }}>
    {
        props=>(

        <Form >
        <div>
        <FormInput
        label="Full Name:"
        name="name"
        type="text"
        // value = {state.name}
        // onChange = {handleChange}
        />
        <ErrorMessage  name="name">
            {msg =><div className="invalid-entry">{msg}</div>}
        </ErrorMessage>
        </div>
        <div>
        <FormInput
        label="Email:"
        name="email"
        type="email"
        // value = {state.email}
        // onChange = {handleChange}
        />
        <ErrorMessage  name="email">
            {msg =><div className="invalid-entry">{msg}</div>}
        </ErrorMessage>
        </div>
        <div>
        <FormInput
        label="Title:"
        name="title"
        type="text"
        // value = {state.password}
        // onChange = {handleChange}
        />
        <ErrorMessage  name="title">
            {msg =><div className="invalid-entry">{msg}</div>}
        </ErrorMessage>
        </div>
        <div>
        <FormInput
        label="Description:"
        name="description"
        type="text"
        // value = {state.password_confirmation}
        // onChange = {handleChange}
        />
        <ErrorMessage  name="description">
            {msg =><div className="invalid-entry">{msg}</div>}
        </ErrorMessage>
        </div>

        <div>
        <FormInput
        label="Address:"
        name="address"
        type="text"
        // value = {state.password_confirmation}
        // onChange = {handleChange}
        />
        <ErrorMessage  name="address">
            {msg =><div className="invalid-entry">{msg}</div>}
        </ErrorMessage>
        </div>

        <div className="form-group-update">
            <label>Select Status:</label><br/>
            <Field name="status" as="select" >
            <option value="">Select Status</option> 
            <option value="Available">Available</option> 
            <option value="Not Available">Not Available</option>        
            </Field>
            <ErrorMessage  name="status">
                {msg =><div className="invalid-entry">{msg}</div>}
            </ErrorMessage>
        </div>
        

        <button type='submit' className='create_btn' >  
        Create User
        </button>
        </Form>

        )
    }
    </Formik>
    </div>
            </div>
    </div>
  );
};

export default AddUser;
