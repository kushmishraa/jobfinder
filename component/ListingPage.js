import React, { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { getData } from "@/api/s3bucketGetPut";
import ListingComponent from "./ListingComponent";

const monst = Montserrat({
    subsets : [],
    weight: '300'
})


export default function ListingPage(){
    const [listedJobsObj , setListedJobs] = useState();
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
                    return(< ListingComponent jobObj = {jobObj} />)
                }) : <h2>Loading</h2>}
                
            </div>
        </div>
    )
}