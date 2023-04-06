import React, { useState } from "react";

export default function AddListings(props){
    const [error , setError] = useState();
    const {addrecords} = props
    return(
        <>
        <form onSubmit={(e)=>addrecords(setError,e)}>
                   <input type={'text'} placeholder="salary" name="salary"/>
                   <input type={'text'} placeholder="position" name="position"/>
                   <input type={'text'} placeholder="img url" name="imgUrl"/>
                   <input type={'text'} placeholder="link" name="link"/>
                   <input type={'text'} placeholder="Location" name="location"/>
                   <input type={'text'} placeholder="experience required" name="exp"/>
                   <button type="submit"><h3>Add Records</h3></button>
                   <h3 className="form-error">{error}</h3>
               </form>
        </>
    )
}