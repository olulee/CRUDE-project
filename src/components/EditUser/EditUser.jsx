import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import FormInput from '../inputs/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../store/action/userAction';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const [value, setValue] = useState(null);
  const params = useParams();
  const users = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const selectedUser = users.find((each) => each.name === params.name);
    setValue(selectedUser);
    return () => {};
  }, []);
  return (
    <div className='cont-wrapper'>
      {value === null ? (
        'Loading.......'
      ) : (
        <div className='add_form_user '>
          <div className='form_wrapper'>
            <h4>Edit {params.name} Detail</h4>
            <Formik
              enableReinitialize
              initialValues={{
                name: value.name,
                email: value.email,
                title: value.title,
                description: value.description,
                status: value.status,
                address: value.address,
              }}
              validationSchema={yup.object({
                name: yup
                  .string()
                  .max(25, 'Name should not exceed 20 Characters')
                  .required('Please Enter Your Name'),

                email: yup
                  .string()

                  .email('Invalid email address')

                  .required('Please Enter Email Address'),
                title: yup.string().required('please enter Title'),
                description: yup
                  .string()
                  .required('please enter description')
                  .min(8, 'Description must be at least 8 character'),
                status: yup.string().required('please Select Status'),
                address: yup.string().required('please enter address'),
              })}
              onSubmit={async (values) => {
                await dispatch(editUser(values));
                history.push('/');
              }}
            >
              {(props) => (
                <Form>
                  <div>
                    <FormInput label='Full Name:' name='name' type='text' />
                    <ErrorMessage name='name'>
                      {(msg) => <div className='invalid-entry'>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <FormInput
                      label='Email:'
                      name='email'
                      type='email'
                      disabled
                    />
                    <ErrorMessage name='email'>
                      {(msg) => <div className='invalid-entry'>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <FormInput label='Title:' name='title' type='text' />
                    <ErrorMessage name='title'>
                      {(msg) => <div className='invalid-entry'>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <FormInput
                      label='Description:'
                      name='description'
                      type='text'
                    />
                    <ErrorMessage name='description'>
                      {(msg) => <div className='invalid-entry'>{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div>
                    <FormInput label='Address:' name='address' type='text' />
                    <ErrorMessage name='address'>
                      {(msg) => <div className='invalid-entry'>{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className='form-group-update'>
                    <label>Select Status:</label>
                    <br />
                    <Field name='status' as='select'>
                      <option value=''>Select Status</option>
                      <option value='Available'>Available</option>
                      <option value='Not Available'>Not Available</option>
                    </Field>
                    <ErrorMessage name='status'>
                      {(msg) => <div className='invalid-entry'>{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <button type='submit' className='create_btn'>
                    Edit User
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUser;
