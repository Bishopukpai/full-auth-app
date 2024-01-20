import axios from 'axios'
import {sessionService} from 'redux-react-session'

export const loginUser = (credentials, history, setFieldError, setSubmitting) => {
    //Name checks get some data

    return  () => { 
    axios.post("http://localhost:8080/user/signin",
        credentials,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    ).then((response) =>{
        const {data} = response;

        if (data.status === "FAILED"){
             const {message} = data

             if (message.includes("credentials")) {
                setFieldError("email", message);
                setFieldError("password", message);
             }else if (message.includes("password")) {
                setFieldError("password", message);
             }

        } else if (data.status === "SUCCESS") {
            const userData = data.data[0]

            const token = userData._id

            sessionService.saveSession(token).then(() => {
                sessionService.saveUser(userData).then(() => {
                    history('/dashboard')
                }).catch(err => console.error(err))
            }).catch(err => console.error(err))
        }

        setSubmitting(false)

    }).catch(err => console.error(err))

    } 
}
export const signupUser = (credentials, history, setFieldError, setSubmitting) => {
   
        return (dispatch) => {
    axios.post("http://localhost:8080/user/signup",
        credentials,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    ).then((response) =>{
        const {data} = response;

        if(data.status === "FAILED") {
            const {message} = data

            if(message.includes("name")) {
                setFieldError("name", message)
            }else if(message.includes("email")) {
                setFieldError("email", message)
            }else if(message.includes("date")) {
                setFieldError("dateOfBirth", message)
            }else if (message.includes("password")) {
                setFieldError("password", message)
            }

            //complete submission in the failed block

            setSubmitting(false)
        }else if (data.status === "SUCCESS"){
            //create an account for the user and login user

            const {email, password} = credentials;

            dispatch(
                loginUser({email, password}, history, setFieldError, setSubmitting)
            )
        }
    }).catch(err => console.error(err))
        }
}

export const logoutUser = () => {
    return () => {

    }
}