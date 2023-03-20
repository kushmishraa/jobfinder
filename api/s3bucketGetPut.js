import axios from 'axios';
const url = 'https://stg-upload.musafir.com/dev/directjobfinder/listing.json';

export const postUrl ='https://stg-upload.musafir.com/dev/directjobfinder/listing.json'

export async function putData(listedJobs){
    const response = await fetch(url , {method:'POST',headers:{'Content-Type' : 'application/json'},body:{listedJobs}})
    const data = await response.json();
    console.log(data);
    // await axios.put(url , {listedJobs})
}


export async function getData(setListedJobs , dispatcher , initialState , action){
    const response = await fetch(postUrl)
    const data = await response.json();
    
    if(!setListedJobs){
        dispatcher({action : action , data : data});
    }else{
        setListedJobs(data)
    }
}
