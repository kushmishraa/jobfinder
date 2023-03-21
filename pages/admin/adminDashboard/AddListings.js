import React from "react";
import { Montserrat } from "next/font/google";
const monst = Montserrat({
    subsets:[]
})
export default function AddListings(props){
    const {addrecords} = props
    return(
        <>
        <form onSubmit={addrecords} className={monst.className}>
                   <input type={'text'} placeholder="salary" name="salary"/>
                   <input type={'text'} placeholder="position" name="position"/>
                   <input type={'text'} placeholder="img url" name="imgUrl"/>
                   <input type={'text'} placeholder="link" name="link"/>
                   <input type={'text'} placeholder="Location" name="location"/>
                   <input type={'text'} placeholder="experience required" name="exp"/>
                   <button type="submit"><h3 className={monst.className}>Add Records</h3></button>
               </form>
        </>
    )
}