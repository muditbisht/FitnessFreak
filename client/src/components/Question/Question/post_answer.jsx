import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { navigate } from 'hookrouter';
import { TextField, Button } from '@material-ui/core';

import ajaxRequest from '../../../ajaxRequest';
import {API_DOMAIN} from '../../../config';

// Styled Components ====================================================

let CommentDiv = styled.div`
    height: 3em;

    background: #EFF2F4;
    box-shadow: 20px -8px 34px rgba(255, 255, 255, 0.63);
    border-radius: 8px;
    
    border-radius: 10px;
    margin: 10px 5px 20px 5px;
    padding: 0 10px 0 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    .inpt{
        flex: 1;
        background-color: transparent;
        border-style: hidden;
        border-left-style: hidden;
        height: 2.5em;
        /* border-right: 2px solid #888888; */
        :focus{
            outline: none;
        }
}

.submit-btn{
    font-size: 1em;
    text-transform: none;
}
`;

// ======================================================================



export default function PostAnswer({ user, quesId, ...props }){
    const [answerInput, setAnswerInput] = useState("");
    const [submitAnswerDisabled, setSubmitAnswerDisabled] = useState(true);

    useEffect(()=>{
        setSubmitAnswerDisabled(user===null || answerInput.length===0);
    }, [user, answerInput])

    return (
        <CommentDiv {...props}>
                <input 
                    value={answerInput}
                    onChange={(el)=>setAnswerInput(el.target.value)}
                    placeholder="Post your answer here.....  "
                    className="cmmnt-text inpt"
                >
                </input>
                <Button
                    disabled={ submitAnswerDisabled }
                    type="submit"
                    className="post-btn"
                    onClick={submitAnswer}
                    color="primary"
                >Answer</Button>
            </CommentDiv>
    );

    async function submitAnswer(){
        if(submitAnswerDisabled===false){
            // Submit answer .....................
            setSubmitAnswerDisabled(true);
            try{
                let res = await ajaxRequest('POST', `${API_DOMAIN}/question/post-answer`, {
                    quesId: quesId,
                    answer: answerInput
                });
                if(res.data.success){
                    navigate(`viewFullQuestion/${quesId}`);
                }
            }catch(err){
                setSubmitAnswerDisabled(false);
            }
        }
    }
}