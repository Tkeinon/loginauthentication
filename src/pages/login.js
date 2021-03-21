import React from 'react';
import styled from 'styled-components';
import image from '../images/gulnaz-shaidullina-vBos7bw98bY-unsplash.jpg';
import LoginForm from "../components/LoginForm";
import {Link} from "react-router-dom";
import {Form} from "formik";

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image:  url("${image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const FormContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.4);
  width: 250px;
`;

const Login = () => {

    return(
        <BackgroundContainer>
            <FormContainer>
                <LoginForm />
                <p>New user? Sign up <Link to="/signup">here!</Link></p>
            </FormContainer>
        </BackgroundContainer>
    )
};

export default Login;
