import { listedJobs } from '@/component/ListingPage';
import axios from 'axios';

export async function putData(){
   await axios.put('http://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json' , {listedJobs})
}

export async function getData(){

    const response = await fetch('https://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json')
    const data = response.json();
    console.log(data)
    
}
