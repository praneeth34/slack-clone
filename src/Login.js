import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth,provider} from "./firebase"
import {useStateValue} from "./StateProvider"
import { actionTypes } from './reducer'

function Login() {
    const [state,dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).
        then((result)=>{
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch((err)=>{console.log(err.message)})
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png" alt=""/>
                <h1>Sign in to slack clone</h1>
                <p>slack-clone.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
