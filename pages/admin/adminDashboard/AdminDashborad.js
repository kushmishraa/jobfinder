import { getData, putData } from "@/api/s3bucketGetPut";
import Header from "@/component/Header";
import ListingComponent from "@/component/ListingComponent";
import Spinner from "@/component/Spinner";
import React, { useContext, useEffect , useRef, useState } from "react";

import {Audio} from "react-loader-spinner";
import { adminContext } from "../AdminLogin";
import AddListings from "./AddListings";

export default function AdminDashboard(props){

    const {isLoggin} = props;
    const listedjobobjContext = useContext(adminContext);
    const addlisitngRef = useRef();
    const adminDashboardContainerRef = useRef();
    
    useEffect(()=>{
        getData(null,listedjobobjContext.dispatcher , listedjobobjContext.listedjobobj , "setData");
    },[isLoggin])
    
    const fincNoOfListing = (listedjobobjContext) => {
        if(listedjobobjContext && listedjobobjContext.listedjobobj.data){
            return listedjobobjContext.listedjobobj.data.length
        }
    }

    const addrecords = (setError,e) =>{
        e.preventDefault();
        if(!(e.target.imgUrl.value.includes("https://"))){
        setError("image address not Valid");
        return;
        }
        let jobObjDataLen=listedjobobjContext.listedjobobj.data.length
        let count=0;
        for(let i=0;i<jobObjDataLen ; i++){
            if(listedjobobjContext.listedjobobj.data[i].id == count){
               count++;
            }
        }
       
        console.log(e.target.salary.value)
        let newObj = {
            id : count,
            salary : e.target.salary.value,
            experience:e.target.exp.value,
            link:e.target.link.value,
            location:e.target.location.value,
            position:e.target.position.value,
            img:e.target.imgUrl.value,
        }

        listedjobobjContext.listedjobobj.data.push(newObj);
        putData(listedjobobjContext.listedjobobj,listedjobobjContext.dispatcher,"putCall")
    }

    const showAddListing = (close) =>{
        if(close == true){
        addlisitngRef.current.style.opacity = 0;
        addlisitngRef.current.style.visibility = 'hidden';
        adminDashboardContainerRef.current.style.filter = 'blur(0px)';
        }
        else{
            addlisitngRef.current.style.opacity =1;
            addlisitngRef.current.style.visibility = 'visible';
            adminDashboardContainerRef.current.style.filter = 'blur(5px)';
        }
    }

    return(
        <>
       
        

        <div className="admin-dashboard-container" ref={adminDashboardContainerRef}>
        <div className="admin-dashboard-header">
            <div className="main-header">
                <Header isAdmin={true} addListing={"Add Featured Jobs"} home={"Visit Homepage"}/>
            </div>
        </div>
            <div className="admin-dashboard-addlisting" >
            <div className="addlisting-svg" onClick={showAddListing} >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <path d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                </path> 
            <path d="M21 7V18C21 19.6569 19.6569 21 18 21H7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                </path> 
            <path d="M10 10V7M10 10V13M10 10H13M10 10H7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                </path> 
            </g>
            </svg>
            </div>
            </div>

            <div className="admin-dashboard-listing-container"> 
            <div className="admin-dashboard-currlisting">
                { fincNoOfListing(listedjobobjContext) > 0 ? 
                listedjobobjContext.listedjobobj.data.reverse().map((jobObj)=>{
                    return(
                    <ListingComponent jobObj = {jobObj} isLoggin={isLoggin} key={jobObj.id}/>
                    )
                }) 
                : 
                <div className="admin-dashboard-loading">
                <Spinner />
                </div> }
            </div>
            
           
           </div>

        </div>
        <div className="addlisting-container" ref={addlisitngRef}>
            <div className="admin-dashboard-addrecords" >
            <div className="addlisting-close-btn" onClick={()=>showAddListing(true)}>
            <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path> </g></svg>
            </div>
            <AddListings addrecords={addrecords} />
            </div>
        </div>
        </>
    )
}