import { listedJobs } from '@/component/ListingPage';
import axios from 'axios';

export async function putData(){
   await axios.put('http://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json' , {listedJobs})
}

export async function getData(setListedJobs){

    const response = await fetch('https://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json')
    const data = await response.json();
    setListedJobs(data)
    
}
