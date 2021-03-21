import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import TextInput from "./FormikComponents";
import {useHistory} from 'react-router-dom';

const SignupForm = () => {

    const history = useHistory();

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('Enter name'),
                email: Yup.string().email('Email not valid').required('Enter email'),
                password: Yup.string().required('Enter password'),
                confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password must match')
            })}
            onSubmit={values => {
                const signupInfo = {
                    name: values.name,
                    email: values.email,
                    password: values.password
                }
                console.log("Values: ", JSON.stringify(signupInfo).toString())
                history.push("/")
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <TextInput            label="Name"
                                          id="email"
                                          name="email"
                                          type="text"

                    />
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
                    <TextInput            label="Confirm Password"
                                          id="confirmPassword"
                                          name="confirmPassword"
                                          type="password"

                    />
                    <button type="submit">Sign up!</button>
                    <span style={{marginRight: "10px"}}></span>
                    <button type="reset" onClick={() => history.push("/")}>Return</button>
                </Form>
            )}

        </Formik>

    )
}

export default SignupForm;