import React, { createContext, useContext, useRef } from "react";
import { useReducer } from "react";
import Header from "@/component/Header";
import { reducer } from "@/reducer/appReducer";
import HeroSection from "@/component/HeroSection";
import ListingPage from "@/component/ListingPage";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";



export const listedJobsContext = createContext();
export default function Index(){
  
  const initialState = {};

  const [listedJobsState , dispatcher] = useReducer(reducer , initialState);
  const mainHeaderRef = useRef();

  const listedjobobj = {
    listedJobsState : listedJobsState,
    dispatcherf : dispatcher
  }

  const listingRef = useRef()

  const scrollToListing = () =>{
    listingRef.current.scrollIntoView({behavior : 'smooth'});
  }
const adsenseRef = useRef();

  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  })

  const handleAdClose = () =>{
    adsenseRef.current.style.display = 'none';
  }
  const handleHeader = (e) =>{
    //e._reactName == "onMouseEnter" ? mainHeaderRef.current.style.opacity=1 : mainHeaderRef.current.style.opacity=0.7;
  }
  return(
    <listedJobsContext.Provider value={listedjobobj}>
    <div className="main-container">
        <div className="main-header" ref={mainHeaderRef} onMouseEnter={handleHeader} onMouseLeave={handleHeader}>
        <Header scrollToListing={scrollToListing} />
        </div>
      
      <div className="googleAdsense-script" ref={adsenseRef}>
      <h2 className="close-googleadsense" onClick={handleAdClose}>x</h2>
      <Head>
      <title>jobFinder</title>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3907583389552514"
      crossOrigin="anonymous"></script>
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3907583389552514"
     crossorigin="anonymous"></Script>
     <div>
     <ins className="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-3907583389552514"
     data-ad-slot="2216689906"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
     </div>
      </div>

        <div className="main-heroSection">
        <HeroSection scrollToListing={scrollToListing}/>
        </div>

        <div className="main-listing-Section" ref={listingRef}>
          <ListingPage />
        </div>

    </div>
     </listedJobsContext.Provider>
  )
}