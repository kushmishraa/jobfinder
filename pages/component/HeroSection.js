import React, { useRef } from "react";
import { Montserrat } from "next/font/google";
const mont = Montserrat({
    subsets : [],
    weight : '300'
})




export default function HeroSection(){
    const heroSectionHeadingRef = useRef();
    const blur = (e) =>{
        if(e._reactName == "onMouseEnter"){
            heroSectionHeadingRef.current.style.filter = 'blur(1px)'
        }
        else{
            heroSectionHeadingRef.current.style.filter = 'blur(0px)'
        }
        
    }
    return(
        <>
        <div className="heroSection">
           <div className="hero-section-cont">
                <div className="hero-section-heading" ref={heroSectionHeadingRef}>
                    <h1 className={mont.className}>Looking to start your carrer ?</h1>
                    <h2 className={mont.className}>Find a role that suits you !</h2>
                </div>
                <div className="hero-section-button-cont">
                <button onMouseEnter={blur} onMouseLeave={blur} ><h2 className={mont.className}>view Listings</h2></button>
                </div>
            </div>
        </div>
        </>
    )
}