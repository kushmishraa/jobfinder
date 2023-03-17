import React from "react";
import {Montserrat} from 'next/font/google'

const mont = Montserrat({
    variable : "header-logo-font",
    weight : '400',
    subsets:[],
})

const headerLinks = ["Listing" , "About us" , "Contact"]
export default function Header(){
    return(
        <div className="header-container">
        <div className="header">
            <div className="header-logo">
                <h1 className={mont.className}>JOBFINDER</h1>
            </div>
            <div className="header-links">
            {headerLinks.map((headerLinks)=>{
                return <h2 key={headerLinks} className={mont.className}>{headerLinks}</h2>
            })}

            </div>
        </div>
    </div>
    )
}
