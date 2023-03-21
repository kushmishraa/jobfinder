import React from "react";
import {Montserrat} from 'next/font/google'

const mont = Montserrat({
    variable : "header-logo-font",
    weight : '400',
    subsets:[],
})

const headerLinks = ["Listing" , "About us" , "Contact"]


export default function Header(props){
    const{scrollToListing , isAdmin , addListing , home} = props;

    const handleClick = (e) =>{
        switch(headerLinks.indexOf(event.target.innerText)){
            case 0 :{
                scrollToListing();
                break;
            }
        }
    }
    return(
        <div className="header-container">
        <div className="header">
            <div className="header-logo">
                <h1 className={mont.className}>JOBFINDER</h1>
            </div>
            <div className="header-links">
                {isAdmin ? 
                <>
                <h2 className={mont.className} onClick={handleClick}>{addListing}</h2>
                <h2 className={mont.className} onClick={handleClick}>{home}</h2>
                </>:
            headerLinks.map((headerLinks)=>{
                return <h2 key={headerLinks} className={mont.className} onClick={handleClick}>{headerLinks}</h2>
            })}
            </div>
        </div>
    </div>
    )
}
