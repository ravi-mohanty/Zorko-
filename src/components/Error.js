// react-router-Dom has given a hook {which can be identified by "use"} which will provide more information related to the error like network error , server not found etc..
import {useRouteError} from "react-router-dom";



const Error = () => {
    const err = useRouteError();
    console.log(err); // console.log will print on the console if we need to see somthing on the screen than we can need the dom to see it , here this error msg can be seen on the console --> it will print and object where can take the values from the object to display it . 
   
    
    return (
        <div>
           <h1>This is not defined</h1>
           <h2>{err.status} : {err.statusText}</h2>
        </div>
    );
};

export default Error;

// two doubts -> we need to capture the error or it will automatically take it ? --> it automatically takes it 
// do we need to provide this error comp. to all of routing path or just one is enough ? --> no 