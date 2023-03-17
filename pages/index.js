import React, { useRef } from "react";
import { useReducer } from "react";
import Header from "@/component/Header";
import { reducer } from "@/reducer/appReducer";
import HeroSection from "@/component/HeroSection";
import ListingPage from "@/component/ListingPage";
export default function Index(){

  const initialState = {}
  const [state , dispatcher] = useReducer(reducer , initialState);

  const listingRef = useRef()

  const scrollToListing = () =>{
    listingRef.current.scrollIntoView({behavior : 'smooth'});
  }

  return(
    <div className="main-container"> 
        <div className="main-header">
        <Header scrollToListing={scrollToListing} />
        </div>
        <div className="main-heroSection">
        <HeroSection scrollToListing={scrollToListing}/>
        </div>
        <div className="main-listing-Section" ref={listingRef}>
          <ListingPage />
        </div>
    </div>
  )
}