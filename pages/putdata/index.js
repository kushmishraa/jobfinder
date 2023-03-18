import React from "react";
import { getData, putData } from "@/api/s3bucketGetPut";

export default function index(){
    return(<>
    <button onClick={putData}>Click to PUT</button>
    <button onClick={getData}>Click to PUT</button>
    </>
    )
}