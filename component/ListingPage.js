import React, { useEffect, useState } from "react";
import { getData } from "@/api/s3bucketGetPut";
import ListingComponent from "./ListingComponent";
import Spinner from "./Spinner";

export default function ListingPage(){
    const [listedJobsObj , setListedJobs] = useState();
    const [filteredJob , setFilteredJob] = useState({});

    useEffect(()=>{
        getData(setListedJobs);
    },[]);
    let filteredJobsListing = [];
    const findingTypesOfJobs = () =>{
        if( !listedJobsObj || !listedJobsObj.data){
            return
        }
        let totalNoOfListings = listedJobsObj.data.length;
        let findingTypesOfJobs = {};
    
        for(let i =0 ; i<totalNoOfListings ; i++){
            if(!findingTypesOfJobs[listedJobsObj.data[i].position]){
                findingTypesOfJobs[listedJobsObj.data[i].position] += 1;
            }
        };
        filteredJobsListing = Object.keys(findingTypesOfJobs)
    }


    const changeListing = (e) =>{
        if(e.target.value == "none"){
            setFilteredJob({});
            return
        }
        let currSelectedJob = e.target.value ;
        let filteredJob = [];

        let totalNoOfListings = listedJobsObj.data.length;
    
        for(let i =0 ; i<totalNoOfListings ; i++){
            if(listedJobsObj.data[i].position == currSelectedJob ){
                filteredJob.push(listedJobsObj.data[i]);
            }
        };
        setFilteredJob({
            currSelectedJob : currSelectedJob,
            filteredJob : filteredJob
        })
    }

    const showListing = (jobObj , index) =>{
        return <ListingComponent jobObj = {jobObj} key={index}/>
    } 
    
    return(
        <div className="listing-cont">
            <div className="listing-header-container">

            <div className="listing-heading">
                <h2>Listing Page</h2>
            </div>
            <div className="listing-filter">
                {findingTypesOfJobs()}
                <select value={filteredJob.currSelectedJob}  onChange={changeListing}>
                <option value="select your job role" hidden disabled selected >Select your job type</option>
                    <option value="none" className="select-options">None</option>
                    {filteredJobsListing ?  filteredJobsListing.map((availableJobs)=>{
                        return <option value={availableJobs} className="select-options" key={availableJobs}>{availableJobs}</option>
                    }) : null }
                </select>
            </div>
            </div>
            <div className="listing-card-component-container">

            <div className="listing-card-component" >
                {   filteredJob.currSelectedJob ? filteredJob.filteredJob.reverse().map((jobObj)=>{
                    return showListing(jobObj)
                }):  listedJobsObj ? listedJobsObj.data.length > 0 ?  listedJobsObj.data.reverse().map((jobObj,index)=>{
                    return showListing(jobObj,index)
                }) : <Spinner /> : <h1>nothing to show here !</h1>}
            </div>
            </div>
        </div>
    )
}