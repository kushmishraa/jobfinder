export const reducer = (state , action) =>{
    switch(action.action){
        case "add" :
                return {new : "hii"}
        case "delete" :
            console.log("delete");
            break;
        case "setData" :
            return action.data;
        default :
            break;
        }

}