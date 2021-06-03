export const NameAction = ()=>{
    let strings =["Lokesh","Varma",
        "Akash", "Rohan","sujan"];

     return {
        type:"mySecComp", 
        data:strings[Math.round(Math.random()*4)]
     }
}