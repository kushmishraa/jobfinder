import { postUrl } from "@/api/s3bucketGetPut";
import { reducer } from "@/reducer/appReducer";
import React, { createContext, useContext, useReducer, useRef, useState } from "react";
import AdminDashboard from "./adminDashboard/AdminDashborad";

export const adminContext = createContext();

export default function AdminLogin(){

    async function adminValidation(){
        const response = await fetch('https://stg-upload.musafir.com/dev/directjobfinder/admin.json');
        const data = await response.json();
        if(data.loginData.username == username.current.value && data.loginData.pass == password.current.value){
            console.log("sucess");
            setLoggin(true);
        }
        else{
            setLoggin(false);
            console.log("failed");
        }
    }

    const handleLogin = () =>{
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
            <input type={"text"} placeholder="User Name" ref={username}/>
            <input type={"password"} placeholder="Password" ref={password}></input>
            <button onClick={handleLogin}>login</button>
            </div>
            : <AdminDashboard isLoggin={isLoggin}/>}
        </div>
    </adminContext.Provider>
    )
}