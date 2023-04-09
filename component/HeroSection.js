import React, { useRef } from "react";

export default function HeroSection(props){

    const {scrollToListing} = props;
    
    const heroSectionHeadingRef = useRef();
    const blur = (e) =>{
        if(e._reactName == "onMouseEnter"){
            heroSectionHeadingRef.current.style.filter = 'blur(1px)'
        }
        else{
            heroSectionHeadingRef.current.style.filter = 'none'
        }
        
    }

    return(
        <>
        <div className="heroSection">
            <div className="hero-section-video-container">
            {/* <video autoplay muted loop autoPlay>
                <source src="/herosectionvideo.mp4" type="video/mp4" />
            </video> */}
            </div>
           <div className="hero-section-cont">
                <div className="hero-section-heading" ref={heroSectionHeadingRef}>
                    <h2 className="hero-section-main-head">Looking to start your carrer ?</h2>
                    <h2>Find a role that suits you !</h2>
                </div>
                <div className="hero-section-button-cont">
                <button onMouseEnter={blur} onMouseLeave={blur} onClick={scrollToListing}><h2>view Listings</h2></button>
                </div>
            </div>
        </div>
        </>
    )
}