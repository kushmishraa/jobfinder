import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { putData } from "@/api/s3bucketGetPut";
import { adminContext } from "@/pages/admin/AdminLogin";

export default function ListingComponent(props){

    const {jobObj , isLoggin} = props;
    const context = useContext(adminContext)
    

    const deleteEntry = (id) => {
        let currListing = context.listedjobobj;
        let eleIndex
        for(let i=0 ; i<currListing.data.length ; i++){
            if(currListing.data[i].id == id){
                eleIndex = i;
                break
            }
        }
        currListing.data.splice(eleIndex , 1);
        putData(currListing , context.dispatcher , "putCall");
    }
    return(
        
        <div className="listing-card" key={jobObj.id}  id = {jobObj.id}>
        <div className="listing-card-r1">
        <div className="listing-card-image">
            <Image 
             src = {jobObj.img}
             width={1000}
             height={0}
             alt={"logo"}
            />
        </div> 
        </div>
        <div className="listing-card-info">
        <h2 >{jobObj.position}</h2>
        <h2 >Location : {jobObj.location}</h2>
        <h2 >Salary : {jobObj.salary}</h2>
        <h2 >Experince : {jobObj.experience}</h2>
        </div> 
        <div className="listing-card-button">
            {!isLoggin ?
        <a href={jobObj.link} target="_blank" title={jobObj.position}><button><h2>Apply Now  !</h2></button></a>
        : 
        <div className="admin-dashboard-button">
        <button>Edit</button>
        <button onClick={()=>deleteEntry(jobObj.id)}>Delete</button>
        </div>
        }
        </div>
    </div>
 
    )
}