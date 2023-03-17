import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const monst = Montserrat({
    subsets : [],
    weight: '300'
})

const listedJobs = [
    {
        id:0,
        img : "https://wallpapercave.com/wp/wp11400944.jpg",
        position : "Product Manager",
        location : "pune",
        salary : "10k",
        experience : "0-1"
    },
    {
        id:1,
        img : "https://wallpapercave.com/wp/wp11400944.jpg",
        position : "Product Manager",
        location : "pune",
        salary : "10k",
        experience : "0-1"
    },
    {
        id:2,
        img : "https://wallpapercave.com/wp/wp11400944.jpg",
        position : "Product Manager",
        location : "pune",
        salary : "10k",
        experience : "0-1"
    },
    {
        id:3,
        img : "https://wallpapercave.com/wp/wp11400944.jpg",
        position : "Product Manager",
        location : "pune",
        salary : "10k",
        experience : "0-1"
    },
    {
        id:4,
        img : "https://wallpapercave.com/wp/wp11400944.jpg",
        position : "Product Manager",
        location : "pune",
        salary : "10k",
        experience : "0-1"
    }
    ,{
        id:5,
        img : "https://wallpapercave.com/wp/wp11400944.jpg",
        position : "Product Manager",
        location : "pune",
        salary : "10k",
        experience : "0-1"
    }
    ,{
        id:6,
        img : "https://wallpapercave.com/wp/wp11400944.jpg",
        position : "Product Manager",
        location : "pune",
        salary : "10k",
        experience : "0-1"
    }
]

export default function ListingPage(){
    return(
        <div className="listing-cont">
            <div className="listing-heading">
                <h1 className={monst.className}>Listing Page</h1>
            </div>
            <div className="listing-card-component">
                {listedJobs.map((jobObj)=>{
                    return(
                        <div className="listing-card" key={jobObj.id}>
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
                    <button><h2 className={monst.className}>Apply Now !</h2></button>
                    </div>
                </div>
                    )
                })}
                
            </div>
        </div>
    )
}