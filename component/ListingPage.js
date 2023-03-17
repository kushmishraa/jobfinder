import React, { useRef } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const monst = Montserrat({
    subsets : [],
    weight: '300'
})

const listedJobs = [
    {
        id:0,
        img : "https://c4.wallpaperflare.com/wallpaper/729/525/207/intel-logo-wallpaper-preview.jpg",
        position : "Graduate Intern Technical",
        location : "Bengaluru, India",
        workMode : "Hybrid",
        salary : "N/A",
        experience : "Intern",
        link :"https://jobs.intel.com/en/job/bengaluru/graduate-intern-technical/41147/34505458080"
    },
    {
        id:1,
        img : "https://wallpaper.dog/large/20473414.png",
        position : "SECURITY ENGINEERING INTERN",
        location : "Chennai, India",
        salary : "N/A",
        experience : "Intern",
        link : "https://jobs.jobvite.com/logitech/job/oWJfmfw0"
    },
    {
        id:2,
        img : "https://www.thestatesman.com/wp-content/uploads/2018/08/CarDekho.jpg",
        position : "Software Engineer - React",
        location : "Gurugram, Haryana, India",
        salary : "N/A",
        experience : "0 - 5 years",
        link : "https://jobs.klimb.io/girnarsoft/632418dce10d42907a8b2003?source=careers"
    },
]

export default function ListingPage(){
    const handleHover = (e) =>{
    }
    const listingCardComponentRef = useRef();
    
    return(
        <div className="listing-cont">
            <div className="listing-heading">
                <h1 className={monst.className}>Listing Page</h1>
            </div>
            <div className="listing-card-component" ref={listingCardComponentRef}>
                {listedJobs.map((jobObj)=>{
                    return(
                  
                    <div className="listing-card" key={jobObj.id} onMouseEnter={handleHover} id = {jobObj.id}>
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
                })}
                
            </div>
        </div>
    )
}