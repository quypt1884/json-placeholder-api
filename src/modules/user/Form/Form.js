import { Formik } from "formik";
import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../../../components/FormGroup";
import { createUser } from "../../../store/SliceUser"

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveUser = (value) => {
    dispatch(createUser(value))
      .unwrap()
      .then(data => {
        navigate('/')
      }).catch(e=>{
        console.log(e)
      });
  };
  
  return (
    <div className="submit-form">
    <h1 className="text-center">Create User</h1>
    <Formik
       initialValues={{ name:"",
        username:"",
        email:"",
        street:"",
        suite:"",
        city:"",
        zipcode:"",
        lat:"",
        lng:"",
        phone:"",
        website:"",
        companyName:"",
        catchPhrase:"",
        bs:"",}}
       validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Cannot Empty';
        } 
        else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.name) {
          errors.name = 'Cannot Empty';
        }
        if (!values.username) {
        errors.username = 'Cannot Empty';
        }
        if (!values.street) {
          errors.street = 'Cannot Empty';
        }
        if (!values.suite) {
          errors.suite = 'Cannot Empty';
        }
        if (!values.city) {
          errors.city = 'Cannot Empty';
        }
        if (!values.zipcode) {
          errors.zipcode = 'Cannot Empty';
        }
        if (!values.lat) {
          errors.lat = 'Cannot Empty';
        }
        if (!values.lng) {
          errors.lng = 'Cannot Empty';
        }
        if (!values.phone) {
          errors.phone = 'Cannot Empty';
        }
        if (!values.website) {
          errors.website = 'Cannot Empty';
        }
        if (!values.companyName) {
          errors.companyName = 'Cannot Empty';
        }
        
        if (!values.catchPhrase) {
          errors.catchPhrase = 'Cannot Empty';
        }
        
        if (!values.bs) {
          errors.bs = 'Cannot Empty';
        }
        return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
          saveUser(values);
          setSubmitting(false);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <form onSubmit={handleSubmit}>
          <div className="w-50 mx-auto my-0">
              <div className="row"> 
                <FormGroup for='name' label= 'Name' type="text" id="name" name ="name" value={values.name} onChange={handleChange} error={errors.name && touched.name && errors.name}/>
                <FormGroup for='username' label= 'Username' type="text" id="username" name ="username" value={values.username} onChange={handleChange} error={errors.username && touched.username && errors.username}/>
              </div>
          
              <div className="row"> 
                <FormGroup for='email' label= 'email' type="text" id="email" name ="email" value={values.email} onChange={handleChange} error={errors.email && touched.email && errors.email}/>
                <FormGroup for='phone' label= 'phone' type="text" id="phone" name ="phone" value={values.phone} onChange={handleChange} error={errors.phone && touched.phone && errors.phone}/>
              </div>
      
              <div className="row"> 
                <FormGroup for='street' label= 'street' type="text" id="street" name ="street" value={values.street} onChange={handleChange} error={errors.street && touched.street && errors.street}/>
                <FormGroup for='suite' label= 'suite' type="text" id="suite" name ="suite" value={values.suite} onChange={handleChange} error={errors.suite && touched.suite && errors.suite}/>
              </div>
      
              <div className="row"> 
                <FormGroup for='city' label= 'city' type="text" id="city" name ="city" value={values.city} onChange={handleChange} error={errors.city && touched.city && errors.city}/>
                <FormGroup for='zipcode' label= 'zipcode' type="text" id="zipcode" name ="zipcode" value={values.zipcode} onChange={handleChange} error={errors.zipcode && touched.zipcode && errors.zipcode}/>
              </div>
      
              <div className="row"> 
                <FormGroup for='lat' label= 'lat' type="text" id="lat" name ="lat" value={values.lat} onChange={handleChange} error={errors.lat && touched.lat && errors.lat}/>
                <FormGroup for='lng' label= 'lng' type="text" id="lng" name ="lng" value={values.lng} onChange={handleChange} error={errors.lng && touched.lng && errors.lng}/>
              </div>
      
              <div className="row">
                <FormGroup for='companyName' label= 'companyName' type="text" id="companyName" name ="companyName" value={values.companyName} onChange={handleChange} error={errors.companyName && touched.companyName && errors.companyName}/>
                <FormGroup for='catchPhrase' label= 'catchPhrase' type="text" id="catchPhrase" name ="catchPhrase" value={values.catchPhrase} onChange={handleChange} error={errors.catchPhrase && touched.catchPhrase && errors.catchPhrase}/>
              </div>
              
              <div className="row">
                <FormGroup for='bs' label= 'bs' type="text" id="bs" name ="bs" value={values.bs} onChange={handleChange} error={errors.bs && touched.bs && errors.bs}/>
                <FormGroup for='website' label= 'website' type="text" id="website" name ="website" value={values.website} onChange={handleChange} error={errors.website && touched.website && errors.website}/>
              </div>
              <button type="submit" className="btn btn-success mt-3 text-left">
                Add
              </button>
              <Link to='/' className='btn btn-secondary mt-3'>Back</Link>
          </div>
        </form>
       )}
     </Formik>
    
  </div>
  )
}

export default Form