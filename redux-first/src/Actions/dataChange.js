export const DataAction = ()=>{
    let strings =["React Started","React Ongoing",
        "Tasks Given", "React Ended"];

     return {
        type:"myComp", 
        data:strings[Math.round(Math.random()*3)]
     }
}