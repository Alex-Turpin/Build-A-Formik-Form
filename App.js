import React from 'react';
import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values =>{
      alert("Login Successful");
      console.log('form', values);
    },
    validate: values => {
      let errors = {};
      if(!values.name) errors.name = 'Field required';
      if(!values.email) errors.email = 'Username should be an email';
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}> 
        <div>Name</div>
        <input id="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
        <button type="submitBtn">Submit</button>
        </form>
    </div>
  );
}

export default App;
