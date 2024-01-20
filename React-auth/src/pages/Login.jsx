import React from 'react'
//import styled components
import {StyledTextInput, 
    colors, 
    StyledFormArea, 
    StyledTitle, 
    StyledFormButton, 
    StyledLabel, 
    Avatar, 
    ButtonGroup,
    ExtraText,
    TextLink,
    CopyrightText
} from './../components/Styles'
import Logo from '../assets/Logo.png'
//Formik imports
import {Formik, Form} from 'formik';
import { TextInput } from '../components/FormLib';
//Import the Icon
import {FiMail, FiLock} from 'react-icons/fi'

//import Yup for form validation
import * as Yup from 'yup'

//auth & redux 
import {connect} from 'react-redux'
import {loginUser} from '../auth/actions/userActions'
import { useNavigate } from 'react-router-dom';

const Login = ({loginUser}) => {
    const history = useNavigate()
  return (
    <div>
        <StyledFormArea>
            <Avatar image={Logo}/>
            <StyledTitle color={colors.theme} size={30}>Members Only Login</StyledTitle>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}

                //Yup validation schema
                validationSchema={
                    Yup.object({
                        email: Yup.string().email("Invalid email format entered")
                        .required("Email field cannot be empty"),
                        password: Yup.string().min(8, "A strong password should be 8 characters long")
                        .required("Password field is required"),
                    })
                }
                onSubmit={(values, {setSubmitting, setFieldError}) => {
                    console.log(values)
                    loginUser(values, history, setFieldError, setSubmitting);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <TextInput 
                            name="email"
                            type="text"
                            label="Email Address"
                            placeholder="JohnDoe@gmail.com"
                        />

                        <TextInput 
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Please enter Your own password"
                        />
                        <ButtonGroup>
                            <StyledFormButton type="submit">Login</StyledFormButton>
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
            <ExtraText>
                If you do not have an account, <TextLink to='/signup'>Signup Here</TextLink>
            </ExtraText>
        </StyledFormArea>
        <CopyrightText>
            All rights reserved by PEPPU VENTURES; 2024
        </CopyrightText>
    </div>
  )
}

export default connect(null, {loginUser})(Login)