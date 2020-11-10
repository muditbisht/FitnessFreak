import React, { useState, useEffect } from "react";
import { useRoutes } from 'hookrouter';
import Login from "./Login/Login";
import Feed from "./feed";
import {HTML404 } from './ErrorPage/Error';
import FullQuestion from "./Main/fullQuestion"

function getRoutes() {
  return {
    '/' : () => <Login />,
    '/feed*': () =>  <Feed/>,
    '/viewFullQuestion/:quesId' :({quesId}) => <FullQuestion quesId = {quesId}/>
  }
}

function Render() {
  
  
  const page = useRoutes(getRoutes());
  return (
    page 
    || <HTML404 />
  );
}

export default Render;