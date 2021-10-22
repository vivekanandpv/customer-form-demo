import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CustomerForm = (props) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Username is required'),
    city: Yup.string().required('Password is required'),
    language: Yup.string().required('Password is required'),
    email: Yup.string().required('Password is required'),
    contact: Yup.string().required('Password is required'),
  });

  const formikInstance = useFormik({
    initialValues: {
      name: '',
      city: '',
      language: '',
      email: '',
      contact: '',
    },
    onSubmit: (formData, { resetForm }) => {
      props?.add(formData);
      resetForm();
    },
    validationSchema: validationSchema,
  });

  return (
    <>
      <h4>Customer Entry Form</h4>
      <hr />
      <form onSubmit={formikInstance.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='form-control'
            name='name'
            onChange={formikInstance.handleChange}
            value={formikInstance.values.name}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.touched.name && formikInstance.errors.name ? (
            <p className='text-danger'>Name is required</p>
          ) : null}
        </div>

        <div className='form-group my-4'>
          <label htmlFor='city'>City</label>
          <input
            type='text'
            className='form-control'
            name='city'
            onChange={formikInstance.handleChange}
            value={formikInstance.values.city}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.touched.city && formikInstance.errors.city ? (
            <p className='text-danger'>City is required</p>
          ) : null}
        </div>

        <div className='form-group my-4'>
          <label htmlFor='language'>Preferred Language</label>
          <input
            type='text'
            className='form-control'
            name='language'
            onChange={formikInstance.handleChange}
            value={formikInstance.values.language}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.touched.language && formikInstance.errors.language ? (
            <p className='text-danger'>Language is required</p>
          ) : null}
        </div>

        <div className='form-group my-4'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            className='form-control'
            name='email'
            onChange={formikInstance.handleChange}
            value={formikInstance.values.email}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.touched.email && formikInstance.errors.email ? (
            <p className='text-danger'>Email is required</p>
          ) : null}
        </div>

        <div className='form-group my-4'>
          <label htmlFor='contact'>Contact</label>
          <input
            type='text'
            className='form-control'
            name='contact'
            onChange={formikInstance.handleChange}
            value={formikInstance.values.contact}
            onBlur={formikInstance.handleBlur}
          />
          {formikInstance.touched.contact && formikInstance.errors.contact ? (
            <p className='text-danger'>Contact is required</p>
          ) : null}
        </div>

        <button className='btn btn-primary mt-4' type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

export default CustomerForm;
