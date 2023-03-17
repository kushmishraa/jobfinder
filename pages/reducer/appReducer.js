export default reducer = (state , action) =>{
    switch(action){
        case "add" :
                console.log("add");
                return {new : "hii"}
        default :
            console.log("error");
            break;
        }

}