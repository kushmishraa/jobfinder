import React from "react";
import Header from "./component/header";
import { reducer } from "./reducer/appReducer";
import { useReducer } from "react";
import HeroSection from "./component/HeroSection";


export default function Index(){

  const initialState = {}
  const [state , dispatcher] = useReducer(reducer , initialState);

  return(
    <div className="main-container"> 
        <div className="main-header">
        <Header />
        </div>
        <div className="main-heroSection">
        <HeroSection />
        </div>
    </div>
  )
}