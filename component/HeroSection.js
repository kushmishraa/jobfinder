import React from "react";

export default function HeroSection(props){
    const {scrollToListing} = props;
    return(
        <>
        <div className="heroSection">
            <div className="hero-section-video-container">
            </div>
           <div className="hero-section-cont">
                <div className="hero-section-heading">
                    <h2 className="hero-section-main-head">Looking to start your carrer ?</h2>
                    <h2>Find a role that suits you !</h2>
                </div>
                <div className="hero-section-button-cont">
                <button onClick={scrollToListing}><h2>view Listings</h2></button>
                </div>
            </div>
        </div>
        </>
    )
}