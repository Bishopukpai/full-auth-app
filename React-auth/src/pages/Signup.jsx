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
import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi'

//import Yup for form validation
import * as Yup from 'yup'

//auth & redux 
import {connect} from 'react-redux'
import {signupUser} from '../auth/actions/userActions'
import { useNavigate } from 'react-router-dom';

const Signup = ({signupUser}) => {
    const history = useNavigate()
  return (
    <div>
        <StyledFormArea>
            <Avatar image={Logo}/>
            <StyledTitle color={colors.theme} size={30}>New Members Signup</StyledTitle>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    dateOfBirth: "",
                    name: ""
                }}

                //Yup validation schema
                validationSchema={
                    Yup.object({
                        email: Yup.string().email("Invalid email format entered")
                        .required("Email field cannot be empty"),
                        password: Yup.string().min(8, "A strong password should be 8 characters long")
                        .required("Password field is required"),
                        name: Yup.string().required("Name cannot be blank"),
                        dateOfBirth: Yup.date().required("A date of birth is required")
                    })
                }
                onSubmit={(values, {setSubmitting, setFieldError }) =>{
                    signupUser(values, history, setFieldError, setSubmitting)
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
                            name="name"
                            type="text"
                            label="Full Name"
                            placeholder="John Doe"
                        />      

                        <TextInput 
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Please enter Your own password"
                        />

                        <TextInput 
                            name="dateOfBirth"
                            type="date"
                            label="Date of Birth"
                        />
                        <ButtonGroup>
                            <StyledFormButton type="submit">Signup</StyledFormButton>
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
            <ExtraText>
               if you Already have an account, <TextLink to='/login'>Login Here</TextLink>
            </ExtraText>
        </StyledFormArea>
        <CopyrightText>
            All rights reserved by PEPPU VENTURES; 2024
        </CopyrightText>
    </div>
  )
}

export default connect(null, {signupUser})(Signup)