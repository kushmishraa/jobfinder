import { getData, putData } from "@/api/s3bucketGetPut";
import Header from "@/component/Header";
import ListingComponent from "@/component/ListingComponent";
import React, { useContext, useEffect , useState } from "react";

import {Audio} from "react-loader-spinner";
import { adminContext } from "../AdminLogin";
import AddListings from "./AddListings";

export default function AdminDashboard(props){

    const {isLoggin} = props;
    const listedjobobjContext = useContext(adminContext);
    
    useEffect(()=>{
        getData(null,listedjobobjContext.dispatcher , listedjobobjContext.listedjobobj , "setData");
    },[isLoggin])
    
    const fincNoOfListing = (listedjobobjContext) => {
        if(listedjobobjContext && listedjobobjContext.listedjobobj.data){
            return listedjobobjContext.listedjobobj.data.length
        }
    }

    const addrecords = (e) =>{
        let jobObjDataLen=listedjobobjContext.listedjobobj.data.length
        let count=0;
        for(let i=0;i<jobObjDataLen ; i++){
            if(listedjobobjContext.listedjobobj.data[i].id == count){
               count++;
            }
        }
        e.preventDefault();
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
        console.log(listedjobobjContext.listedjobobj.data)
        putData(listedjobobjContext.listedjobobj,listedjobobjContext.dispatcher,"putCall")
    }

    return(
        <div className="admin-dashboard-container">
            {
            fincNoOfListing(listedjobobjContext) > 0 ?  
            
            <div className="admin-dashboard-listing-container"> 
            <div className="main-header">
                <Header isAdmin={true} addListing={"Add listing"} home={"Visit Homepage"}/>
            </div>
            <div className="admin-dashboard-currlisting">
                { fincNoOfListing(listedjobobjContext) > 0 ? 
                listedjobobjContext.listedjobobj.data.map((jobObj)=>{
                    return(
                    <ListingComponent jobObj = {jobObj} isLoggin={isLoggin} key={jobObj.id}/>
                    )
                }) 
                : 
                null }
            </div>
            
            <div className="admin-dashboard-addrecords">
            <AddListings addrecords={addrecords} />
            </div>
         
           </div>
            :
            <div className="admin-dashboard-loading">
            <Audio
                height="80"
                width="80"
                radius="9"
                color="blue"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
                /> 
            </div>
            } 
        
        </div>
    )
}