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

interface ILoginForm {
  email: string;
  password: string;
}

const initialValues: ILoginForm = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required'),
});

const onSubmit = (values: ILoginForm) => {
  console.log(values);
};

const Login: React.FC = () => {
  return (
    <>
      <Head>
        <title>Log in</title>
        <meta name='Log in' content='Log in with email and password' />
      </Head>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <FormikForm>
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
              Submit
            </Button>
          </FormikForm>
        </Formik>
      </Container>
    </>
  );
};

export default Login;
