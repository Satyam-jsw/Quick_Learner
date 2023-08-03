import Home from "./Home.js";
import Navbar from "./components/Navbar.js";
import { Route,Routes } from "react-router-dom";
import React,{createContext, useReducer, useState} from 'react';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Cards from "./components/Cards.jsx";
import Logout from './components/Logout.js';
import {initialState,reducer} from "../src/reducer/UseReducer.js";


export const UserContext = createContext();

const Routing = () => {
  
  return (
  <Routes>
    <Route path = "/" element = {<Cards/> }>
    </Route>
    
    <Route path = "/signup" element = {<Signup />}>
    </Route>

    <Route path = "/signin" element = {<Login />}>
    </Route>

    {/* <Route path = "/topic" element = {<Topic />}>
    </Route> */}

    <Route path = "/logout" element = {<Logout />}>
    </Route>
  </Routes>
  )
}


const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
    <UserContext.Provider value = {{state,dispatch}}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
