import React, { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { getData } from "@/api/s3bucketGetPut";

const monst = Montserrat({
    subsets : [],
    weight: '300'
})


export default function ListingPage(){
    const [listedJobsObj , setListedJobs] = useState()
    useEffect(()=>{
        getData(setListedJobs);
    },[]);
    
    return(
        <div className="listing-cont">
            <div className="listing-heading">
                <h1 className={monst.className}>Listing Page</h1>
            </div>
            <div className="listing-card-component" >
                {listedJobsObj ? listedJobsObj.listedJobs.map((jobObj)=>{
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
                    <button onClick={()=>{window.open(jobObj.link , "_self")}}><h2 className={monst.className}>Apply Now !</h2></button>
                    </div>
                </div>
             
                    )
                }) : <h2>Loading</h2>}
                
            </div>
        </div>
    )
}