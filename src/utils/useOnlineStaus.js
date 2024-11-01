// here we are checking the online status of  the user that can be done window object [event listners] [they have the super power]
// we are using the custom hook here .

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlinestatus, setonlinestatus] = useState(true); // I am using it so that I can store the state [online/offline] can re render when the state is changed
    
    useEffect(() => {
         window.addEventListener("offline", ()=> {
            setonlinestatus(false);
        });
        window.addEventListener("online", ()=> {
                setonlinestatus(true);
            });
    }, []);  // we are using it here so that we use the eventlistner  once[empty dependency array]

    return onlinestatus; // this is a boolen value representing online/offline 
};

export default useOnlineStatus;