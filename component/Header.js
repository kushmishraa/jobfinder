import React, { useRef } from "react";
import * as gtag from './utilfunction';


const headerLinks = ["Listing" , "Contact"]

export default function Header(props){
    
    const{scrollToListing , isAdmin , addListing , home} = props;
    const headerRef = useRef();

    const handleClick = (e) =>{
        console.log(e);
        switch(headerLinks.indexOf(event.target.innerText)){
            case 0 :{
                scrollToListing();
                break;
            }
            case 1:{
                // window.location.href = "/contact";
                gtag.event({
                    action: 'click',
                    category: 'Contact',
                    label: 'none'
                  })
            }
        }
    }

    return(
        <div className="header-container">
        <div className="header" ref={headerRef}>
            <div className="header-logo">
                <h1>JOBFINDER</h1>
            </div>
            <div className="header-links">
                {isAdmin ? 
                <>
                <h2  onClick={handleClick}>{addListing}</h2>
                <h2  onClick={handleClick}>{home}</h2>
                </>:
            headerLinks.map((headerLinks)=>{
                return <h2 key={headerLinks} onClick={handleClick}>{headerLinks}</h2>
            })}
            </div>
        </div>
    </div>
    )
}
