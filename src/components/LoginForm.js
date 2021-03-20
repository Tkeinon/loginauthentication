import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import TextInput from "./FormComponents";

const LoginForm = () => {

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
            console.log("Values: ", JSON.stringify(logInfo).toString())
        }}
        >
            <Form>
                <TextInput
                label="Username/email"
                id="email"
                type="text"
                name="email"
                placeholder="Enter email"
            />
                <TextInput
                    label="Password"
                    id="password"
                    type="text"
                    name="password"
                    placeholder="Enter password"
                />
                <button type="submit">Log in</button>
            </Form>

        </Formik>

    )
}

export default LoginForm;