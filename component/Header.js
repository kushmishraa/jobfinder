import Link from "next/link";
import React, { useRef } from "react";
import * as gtag from './utilfunction';


const headerLinks = ["Contact"]

export default function Header(props){
    
    const{scrollToListing , isAdmin , home , isContact} = props;
    const headerRef = useRef();

    const handleClick = (e) =>{
        console.log(e);
        switch(headerLinks.indexOf(event.target.innerText)){
            case 0:{
                // window.location.href = "/contact";
                gtag.event({
                    action: 'click',
                    category: 'Contact',
                    label: 'none',
                    value : 'contact button clicked'
                  })
            }
        }
    }

    return(
        <div className="header-container">
        <div className="header" ref={headerRef}>
            <Link href="/">
            <div className="header-logo">
                <h1>JOBFINDER</h1>
            </div>
            </Link>
            <div className="header-links">
                {isAdmin ? 
                <>
                <h2  onClick={handleClick}><Link href="/">{home}</Link></h2>
                </>:
                isContact ?
                <Link href='/'><h2>Home</h2></Link>
                :
            headerLinks.map((headerLinks)=>{
              return(
                headerLinks == "Contact" ? <Link href="/contact"><h2>Contact</h2></Link> : null
              )  
            })}
            </div>
        </div>
    </div>
    )
}
