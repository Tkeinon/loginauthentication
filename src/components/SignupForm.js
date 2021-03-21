import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import TextInput from "./FormikComponents";
import {useHistory} from 'react-router-dom';
import axios from "axios";

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
                axios.post("http://localhost:3001/credentials", signupInfo).then(
                    history.push("/")
                )
            }}
        >
            {() => (
                <Form>
                    <TextInput            label="Name"
                                          id="name"
                                          name="name"
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
                    <span style={{marginRight: "10px"}} />
                    <button type="reset" onClick={() => history.push("/")}>Return</button>
                </Form>
            )}

        </Formik>

    )
}

export default SignupForm;