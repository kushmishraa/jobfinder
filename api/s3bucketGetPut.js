import axios from 'axios';

export async function putData(listedJobs){
//          const settings = {
//          method: 'PUT',
//          headers: {
//                 'Content-Type': 'application/json',
//          },
//          body : {listedJobs}
//      };
//    await fetch('https://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json' , settings)
    await axios.put('http://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json' , {listedJobs})
}

export async function getData(setListedJobs , dispatcher , initialState , action){
    const response = await fetch('https://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json')
    const data = await response.json();
    
    if(!setListedJobs){
        dispatcher({action : action , data : data});
    }else{
        setListedJobs(data)
    }
}
