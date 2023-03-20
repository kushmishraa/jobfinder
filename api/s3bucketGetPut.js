import axios from 'axios';


export async function putData(listedJobs,dispatcher){
    let listedjob = JSON.stringify(listedJobs)
    const response = await fetch('https://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json' , {method:'POST',headers:{'Content-Type' : 'text/plain'},body:listedjob})
    const data = await response.json();
    console.log(data);
    dispatcher({action:"increase-put-call"});
    // await axios.put(url , {listedJobs})
}


export async function getData(setListedJobs , dispatcher , initialState , action){

    const response = await fetch('https://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json')
    const data = await response.json();
    // const newData = JSON.parse(data)
    let bodyjson = "body-json"
    if(!setListedJobs){
        dispatcher({action : action , data : data});
    }else{
        if(data[bodyjson]){
            setListedJobs(data[bodyjson])
        }
        else{

            setListedJobs(data)
        }
    }
}
