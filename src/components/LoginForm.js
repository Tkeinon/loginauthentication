import React from 'react';
import {Form, Formik, Field} from 'formik';
import * as Yup from 'yup';
import TextInput from "./FormikComponents";
import {useHistory} from 'react-router-dom';

const LoginForm = () => {
    const history = useHistory();

    return (
        <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string().email('Email not valid').required('Enter email'),
            password: Yup.string().required('Enter password')
        })}
        onSubmit={values => {
            const logInfo = {
                email: values.email,
                password: values.password
            }
            history.push("/home")

            console.log("Values: ", JSON.stringify(logInfo).toString())
        }}
        >
            {({errors, touched}) => (
                <Form>
                    <TextInput            label="Email"
                                          id="email"
                                          name="email"
                                          type="email"

                    />
                    <TextInput            label="Password"
                                          id="password"
                                          name="password"
                                          type="password"
                    />
                    <button type="submit">Log in</button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;