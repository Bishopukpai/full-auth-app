import {useField} from 'formik'
import { useState } from 'react'
import {
    StyledTextInput, 
    StyledLabel,
    StyledIcon,
    ErrorMsg
} from './Styles'
//Eye icon for the password field

import { FiEyeOff, FiEye } from 'react-icons/fi'

export const TextInput = ({icon, ...props}) => {
    const [field, meta] = useField(props)
    const [showPassword, setShowPassword] = useState(false)

    return(
        <div style={{position: "relative"}}>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            {props.type !== "password" && 
            <StyledTextInput 
                {...field}
                {...props}
            />}
            {props.type === "password" && (
                <StyledTextInput 
                    {...field}
                    {...props}
                    type = {showPassword ? "text" : "password"}
                />
            )}
            <StyledIcon>
                {icon}
            </StyledIcon>

            {
                props.type === "password" && (
                <StyledIcon onClick={() => setShowPassword(!showPassword)} right="true">
                    {showPassword && <FiEye />}
                    {!showPassword &&<FiEyeOff/>}
                </StyledIcon>
                
            )}

            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ): (<ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>
            )}
        </div>
    )
}