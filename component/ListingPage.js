import React, { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { getData } from "@/api/s3bucketGetPut";
import ListingComponent from "./ListingComponent";
import Spinner from "./Spinner";

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
                {listedJobsObj ? listedJobsObj.data.length > 0 ?  listedJobsObj.data.reverse().map((jobObj)=>{
                    return(< ListingComponent jobObj = {jobObj} />)
                }) : <Spinner /> : <h1 className={monst.className}>nothing to show here !</h1>}
            </div>
        </div>
    )
}