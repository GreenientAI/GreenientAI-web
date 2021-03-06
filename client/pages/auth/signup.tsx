import React from 'react';
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  FieldProps,
} from 'formik';
import { Button, Form, Container } from 'react-bootstrap';
import * as yup from 'yup';
import ErrorText from '../../components/auth/ErrorText';
import Head from 'next/head';
import axios from 'axios';

interface ISignUpForm {
  name: string;
  email: string;
  password: string;
}

const initialValues: ISignUpForm = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required'),
});

const onSubmit = async (values: ISignUpForm) => {
  const response = await axios.post('/auth/register', values)
  console.log(response)
};

const SignUp: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name='Sign up' content='Sign up with name, email, and password' />
      </Head>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <FormikForm>
            <Form.Group controlId='name' className='mt-3'>
              <Form.Label>Name</Form.Label>
              <Field name='name'>
                {(props: FieldProps) => {
                  const { field } = props;
                  return <Form.Control type='text' {...field} />;
                }}
              </Field>
              <ErrorMessage name='email' component={ErrorText} />
            </Form.Group>
            <Form.Group controlId='email' className='mt-3'>
              <Form.Label>Email</Form.Label>
              <Field name='email'>
                {(props: FieldProps) => {
                  const { field } = props;
                  return <Form.Control type='email' {...field} />;
                }}
              </Field>
              <ErrorMessage name='email' component={ErrorText} />
            </Form.Group>
            <Form.Group controlId='password' className='mt-3'>
              <Form.Label>Password</Form.Label>
              <Field name='password'>
                {(props: FieldProps) => {
                  const { field } = props;
                  return <Form.Control type='password' {...field} />;
                }}
              </Field>
              <ErrorMessage name='password' component={ErrorText} />
            </Form.Group>
            <Button variant='primary' type='submit' className='mt-2'>
              Sign Up
            </Button>
          </FormikForm>
        </Formik>
      </Container>
    </>
  );
};

export default SignUp;
