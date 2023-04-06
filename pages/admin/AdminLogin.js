import { reducer } from "@/reducer/appReducer";
import React, { createContext, use, useContext, useReducer, useRef, useState } from "react";
import AdminDashboard from "./adminDashboard/AdminDashborad";
import Spinner from "@/component/Spinner";
export const adminContext = createContext();

export default function AdminLogin(){

    const [error,setError] = useState();
    const [spinner,showSpinner] = useState(false)

    async function adminValidation(){
        
        const response = await fetch('https://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/admin.json');
        const data = await response.json();
        if(data.loginData.username == username.current.value && data.loginData.pass == password.current.value){
            setLoggin(true);
        }
        else{
            setLoggin(false);
            showSpinner(false);
            setError("UserName or Password is incorrect");
        }
    }

    const handleLogin = () =>{
        showSpinner(true);
        adminValidation();
    }

    const listedjobobjInitialState = {};
    const [listedjobobj , dispatcher] = useReducer(reducer , listedjobobjInitialState);

    const listedObjReducer = {
        listedjobobj : listedjobobj,
        dispatcher : dispatcher
    }

    const username = useRef();
    const password = useRef();

    const [isLoggin , setLoggin] = useState(false);
    return(
        <adminContext.Provider value={listedObjReducer}>
        <div className="admin-container">
            {!isLoggin ?
            <div className="admin-login-form">
            <div className="admin-login-input">
            <input type={"text"} placeholder="User Name" ref={username} />
            <input type={"password"} placeholder="Password" ref={password} ></input>
            <button onClick={handleLogin}>login{showSpinner ?? <Spinner/>}</button>
            <h3 className="form-error">{error}</h3>
            </div>
            </div>
            : <AdminDashboard isLoggin={isLoggin}/>}
        </div>
    </adminContext.Provider>
    )
}