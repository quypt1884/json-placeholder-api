import { Formik } from 'formik'
import React from 'react'

const FormGroup = (props) => {
  return (
      <div className="form-group col-6">
        <label htmlFor={props.for}>{props.label}</label>
        <input
        type={props.type}
        className="form-control"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        />
        <span style={{color: 'red'}}>{props.error}</span>
  </div>

  )
}

export default FormGroup