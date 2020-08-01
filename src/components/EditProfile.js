import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Form, Field } from 'react-final-form';
import Input from "./Input";

const renderInput = ({fn, input, meta}) => {
  console.log(fn);
  return <Input {...input} type="text" errorMessage={meta.touched && meta.error} />}

const onSubmit = values => console.log({ values });

const required = v => {
  if(!v || v === ''){
    return 'This field is required';
  }
  return undefined;
}

const FinalForm = (profile) => {
  const {fn, ln, email} = profile.data
  return <Form onSubmit={onSubmit} render={({handleSubmit}) =><form onSubmit={handleSubmit}>
    <Field name='firstName' component={(e) => renderInput(e, fn)} validate={required} value={fn}></Field>
    <Button type="submit" variant="primary">Save</Button>
</form> }/>
}




function EditProfile({userData, handleClose }) {
  return (<>
    <Modal.Header closeButton>
      <Modal.Title>Edit Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <FinalForm data={userData}/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
    </>
  )
}




export default EditProfile
