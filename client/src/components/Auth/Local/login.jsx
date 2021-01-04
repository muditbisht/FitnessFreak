import React, { useState } from "react"
import { navigate, A } from 'hookrouter';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { LinearProgress } from '@material-ui/core';

import ajaxRequest from '../../../ajaxRequest'
import CONFIG from '../../../config';
import { Name, Password } from './utils';


// Styled Components ======================================================

let LoginForm = styled.form`
    display: flex;
    flex-direction: column;

    .err-msg{
        background-color: #e09393;
        height: 2em;
        border-radius: 10px;
        text-align: center;
        align-content: center;
    }

    .btn{
        width: 60%;
        align-self: center;
    }

    .bottom{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 10px;
    }
`;


// =========================================================================


export default function Login(props) {
    const [userName, setUserName] = useState({value:'', error: null});
    const [password, setPassword] = useState({value:'', error: null});
    const [msg, setMsg] = useState('');
    const [sending, setSending] = useState(false);

    return (
        <LoginForm method="post" onSubmit={handleSubmit} className="form-container" >
            <h1>Login</h1>
            { sending ? <LinearProgress />
                : msg && <div className="err-msg"> {msg} </div>
            }
            <div className="form-group">
                <label htmlFor="email">Enter Username</label>
                <Name
                    id="username-login"
                    input={{ name: "username", label: "Username", max_length: "20", placeholder: 'Enter username' }}
                    name={userName}
                    setName={setUserName} />
            </div>
            <Password 
                id="password-login"
                input={{label:"Password", placeholder: "enter password", name:'password'}}
                password={password}
                setPassword={setPassword}
            />
            <Button type="submit" className="btn" disabled={sending} >Login</Button>

            <div className="bottom">
                <A href="/auth/send-verification">Send Verification</A>
                <A href="/auth/forgot-password">Forgot password?</A>
            </div>
        </LoginForm>);
    

    async function handleSubmit(event) {
        event.preventDefault();
        if (sending) {
            return;
        }
        await setSending(true);
        try {
            let res = await ajaxRequest(
                'POST',
                `${CONFIG.API_DOMAIN}/auth/local/login`,
                {
                    username: userName.value,
                    password: password.value,
                });
            
            await clearError();
            
            if (res.data === 'Unauthorized') {
                await setMsg('Invalid username or password');
            }else if (res.data.success) {
                await clearError();
                navigate('/');
            } else {
                setMsg(res.data.error);
            }
        } catch (err) {
            console.log('Error: ', err.response.status);
            if (err.response.status === 401)
                await setMsg('Invalid username or password');
            else
                await setMsg('Network error.');
        } finally {
            await setSending(false);
        }
    }
    async function clearError() {
        await setUserName({value:userName.value, error: null});
        await setPassword({value:password.value, error: null});
    }
}
