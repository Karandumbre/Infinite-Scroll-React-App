import React from 'react'
import { Button } from 'react-bootstrap';
import { Form, Field } from 'react-final-form';
import Input from "../utils/components/Input";
import { required, emailValidator, charValidator, composeValidators } from '../utils/validators';
import { useDispatch } from 'react-redux';
import { UpdateUser } from './../services/k12Api';

const renderInput = ({input, meta}) => {
  return <Input {...input} type="text" errorMessage={meta.touched && meta.error} />}

export const FinalForm = (profile) => {
  const dispatch = useDispatch()
  const onSubmit = (values) => {
    const newValues = { ...values };
    delete newValues.closeHandler;
    dispatch(UpdateUser(newValues.id,newValues))
    values.closeHandler();
  }

  const { first_name, last_name, email,avatar,id } = profile.data
  return <Form onSubmit={(values) => onSubmit(values)}
    initialValues= {{
      firstName: first_name,
      last_name: last_name,
      email:email,
      avatar:avatar,
      id:id,
      closeHandler:profile.handleCloseHandler
    }}

    render={({handleSubmit, invalid}) => {
      return <form onSubmit={handleSubmit}>
      <Field name='firstName' component={renderInput} validate={composeValidators(required, charValidator)}>
      </Field>
      <Field name='last_name' component={renderInput} validate={composeValidators(required, charValidator)}>
      </Field>
      <Field name='email' component={renderInput} validate={composeValidators(required, emailValidator)}>
      </Field>
      <div className="form-submit">
          <Button type="submit" variant="primary" disabled={invalid}>Save</Button>
          <Button type="button" variant="secondary" onClick={profile.handleCloseHandler}>Close</Button>
      </div>
      </form>
    }
  }/>
}

export default FinalForm;