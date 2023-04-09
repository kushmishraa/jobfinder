import React, { createContext, useContext, useRef } from "react";
import { useReducer } from "react";
import Header from "@/component/Header";
import { reducer } from "@/reducer/appReducer";
import ListingPage from "@/component/ListingPage";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "@/component/Footer";
import dynamic from "next/dynamic";

const HeroSection = dynamic(()=>import('../component/HeroSection'),{
  loading : ()=><p>loading...</p>,
})

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
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        mainHeaderRef.current.style.top = "0";
      } else {
        mainHeaderRef.current.style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  })

  const handleAdClose = () =>{
    adsenseRef.current.style.display = 'none';
  }
  const handleHeader = (e) =>{
    //e._reactName == "onMouseEnter" ? mainHeaderRef.current.style.opacity=1 : mainHeaderRef.current.style.opacity=0.7;
  }

 
  return(
    
    <listedJobsContext.Provider value={listedjobobj}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Discover Exciting Job Opportunities - Freshers | Apply Now!</title>
          <meta name="title" content="Discover Exciting Job Opportunities - Freshers | Apply Now!"></meta>
          <meta name="description" content="Discover top fresher job opportunities! Apply for internships, part-time or full-time jobs across multiple industries on Freshers Job Founder now!"></meta>
          <meta name="og:title" content="Discover Exciting Job Opportunities - Freshers | Apply Now!"></meta>
          <meta name="og:description" content="Discover top fresher job opportunities! Apply for internships, part-time or full-time jobs across multiple industries on Freshers Job Founder now!"></meta>
          <meta name="og:image" content="https://directjobfinder.vercel.app/herosectionimage.jpg"></meta>
          <meta name="keywords" content="Jobs for fresher"></meta>
          <meta name="keywords" content="software engineers freshers job"></meta>
          <meta name="google-site-verification" content="KWZDsjM053jmnKaTBy1LB9aNkulGkLR0dQzs3tSpIlM" />
          <link rel="canonical" href="https://directjobfinder.vercel.app/"></link>
          <script type="application/ld+json" src="/sample.json" async />
        </Head>
   
    <div className="main-container">
        <div className="main-header" ref={mainHeaderRef} onMouseEnter={handleHeader} onMouseLeave={handleHeader}>
        <Header scrollToListing={scrollToListing} />
        
        </div>
      
      {/* <div className="googleAdsense-script" ref={adsenseRef}>
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
      </div> */}

        <div className="main-heroSection">
        <HeroSection scrollToListing={scrollToListing}/>
        </div>

        <div className="main-listing-Section" ref={listingRef}>
          <ListingPage />
        </div>

        <div className="main-footer-section">
          <Footer />
        </div>

    </div>
     </listedJobsContext.Provider>
  )
}