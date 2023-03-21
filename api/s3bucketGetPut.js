import axios from 'axios';


export async function putData(listedJobs,dispatcher,action){
    let listedjob = JSON.stringify(listedJobs)
    const response = await fetch('https://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json' , {method:'POST',headers:{'Content-Type' : 'text/plain'},body:listedjob})
    const data = await response.json();
    console.log(data);
    if(dispatcher){
        dispatcher({action:action});
    }
    // await axios.put(url , {listedJobs})
}


export async function getData(setListedJobs , dispatcher , initialState , action){

    const response = await fetch('https://vo4kyruihh.execute-api.eu-north-1.amazonaws.com/dev/directjobfinder/listing.json')
    const data = await response.json();
    // const newData = JSON.parse(data)
    let bodyjson = "body-json"
    if(!setListedJobs){
        if(data[bodyjson]){
            dispatcher({action : action , data : data[bodyjson]});
        }
        else{
            dispatcher({action : action , data : data});
        }
    }else{
        if(data[bodyjson]){
            setListedJobs(data[bodyjson])
        }
        else{

            setListedJobs(data)
        }
    }
}
