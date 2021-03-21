import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import TextInput from "./FormikComponents";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import {useAuth} from "../context/authContext";

const LoginForm = () => {
    const history = useHistory();
    const { setAuthTokens } = useAuth();

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
            try {
                // get credentials, compare given values and if match, redirect and authenticate
                axios.get("http://localhost:3001/credentials")
                    .then(function (response) {
                        response.data.map(data => {
                            if (values.email === data.email && values.password === data.password) {
                                setAuthTokens(data)
                                history.push("/home")
                            }
                        })
                    })
            } catch (e) {
                console.error(e)
            }

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