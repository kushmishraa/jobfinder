import axios from 'axios';
const url = 'https://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json'
const postUrl ='https://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json'

export async function putData(listedJobs){
    const response = await fetch(postUrl , {method:'POST',headers:{'Content-Type' : 'application/json' , 'Action' : 'putdata'},body:{listedJobs}})
    const data = await response.json();
    console.log(data);
}

export async function getData(setListedJobs , dispatcher , initialState , action){
    const response = await fetch(url)
    const data = await response.json();
    
    if(!setListedJobs){
        dispatcher({action : action , data : data});
    }else{
        setListedJobs(data)
    }
}
