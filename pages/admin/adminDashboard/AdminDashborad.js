import { getData } from "@/api/s3bucketGetPut";
import ListingComponent from "@/component/ListingComponent";
import React, { useContext, useEffect , useState } from "react";

import {Audio} from "react-loader-spinner";
import { adminContext } from "../AdminLogin";

export default function AdminDashboard(props){

    const {isLoggin} = props;
    const listedjobobjContext = useContext(adminContext);
    
    useEffect(()=>{
        getData(null,listedjobobjContext.dispatcher , listedjobobjContext.listedjobobj , "setData");
    })

    return(
        <div className="admin-dashboard-container">
          <div className="admin-dashboard-currlisting">
                {Object.keys(listedjobobjContext.listedjobobj).length > 0 ? listedjobobjContext.listedjobobj.listedJobs.map((jobObj)=>{
                    return(
                    <ListingComponent jobObj = {jobObj} isLoggin={isLoggin} key={jobObj.id}/>
                    )
                }) : 
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="blue"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                    />}
            </div>
        </div>
    )
}