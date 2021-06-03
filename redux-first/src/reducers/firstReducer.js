export const sendDataToMyComp = (state = {message:"This data came from first Reducer"},action)=>{
    switch(action.type){
        case "myComp":
                 return {message:action.data}
        default:
                 return state;
    }
}

export const sendDataToNameComp = (state = {message:"You can change your name here"},action)=>{
    switch(action.type){
        case "mySecComp":
                 return {message:action.data}
        default:
                 return state;
    }
}