import React, { useContext, useEffect } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { adminContext } from "@/pages/admin";
import { putData } from "@/api/s3bucketGetPut";
const monst = Montserrat({
    subsets : [],
    weight: '300'
})

export default function ListingComponent(props){

    const context = useContext(adminContext);
    
    const {jobObj , isLoggin} = props;

    const deleteEntry = (id) => {
        let currListing = context.listedjobobj;
        let eleIndex
        for(let i=0 ; i<currListing.listedJobs.length ; i++){
            if(currListing.listedJobs[i].id == id){
                eleIndex = i;
                break
            }
        }
        currListing.listedJobs.splice(eleIndex , 1);
        putData(currListing);
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
        <div className="listing-card-info">
        <h2 className={monst.className}>{jobObj.position}</h2>
        <h2 className={monst.className}>Location : {jobObj.location}</h2>
        <h2 className={monst.className}>Salary : {jobObj.salary}</h2>
        <h2 className={monst.className}>Experince Required : {jobObj.experience} years</h2>
        </div>  
        </div>
        <div className="listing-card-button">
            {!isLoggin ?
        <button onClick={()=>{window.open(jobObj.link , "_self")}}><h2 className={monst.className}>Apply Now  !</h2></button>
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