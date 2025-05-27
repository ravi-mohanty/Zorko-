import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import Grocery from "./Grocery";
import useOnlineStatus from "../utils/useOnlineStaus";
import {Link} from "react-router-dom"; // link is also a componet which is given by react-router-dom this helps not to refresh the entire dom when we laod the other pages like about us, contact us etc..if we use href than it will load the entire page again.
import userContext from "../utils/UserContext";


const Header = () => {
   const {name} = useContext(userContext);
   console.log(name);

   const onLineStatus = useOnlineStatus(); // herre I am using the hook useOnlineStatus which has a feature of checking user is online or offline which contain a widow fuinction  
   const[btnreact, setbtnreact]= useState("Login"); //we generally put the state varibale at the top so that our code become more neat 
    // how setbtnreact is able to change btn react thoughh it is a const. variable --> as it is not the same old variable becz it get updated when the state is changed and tthis time the value is also the updated one 
     return (
     // VIMP thing to note here is : its just a single page application we are routing to other pages from here only --> thats y react is called single page application --just the interchange of the components
     // two types of routing  1) server side routing : previously there were anchor tags --> which will fetch the data from server than reload the entire page 
                          //  2) client side routing : we dont perform the any network request , just load the component only which will get render on the client side [laptop ot pc] 
       
        <div className="flex justify-between bg-violet-400 shadow-xl"> 
         {/* justify between here is making both the elements place at extreme */}
          <div className="w-10 h-15 mt-4 ml-3">
             <img 
             className="w-29 h-35 flex justify-between"
            //  here I am resizzing the logo and making it at centre
             src = {LOGO_URL} />
           </div>
           <div className="flex items-center">
             {/* here I am using the flex --> than items centre to place the item at the centre from top and buttom*/}
              <ul className="flex m-4 p-4 ">
                  <li className="px-3">
                    { onLineStatus ? "🟢" : "🔴"}
                    {/* this is recommended to use "use" before the hooks , I have  use these red / green circls with "wind" + ";" */}
                   </li >
                   <li className="px-3">
                      <Link to="/">Home</Link> 
                     {/* this is the benifit of using the link insted of using anchor tag href. , where to is used to indicate where do we need to go, now we can see that our page's header and the body is not get rendered only the body get rendered */}
                   </li>
                   <li className="px-3">
                    {/* here I am individually giving the padding towards x on each li */}
                     <Link to="/about">About us</Link>
                     </li>
                     {/* here we are using the link, that doenst refresh the page like anchor tag, but behind the scene it uses the anchor tag only  */}
                    <li className="px-3">
                       <Link to="/grocery">Grocery Store</Link>
                    </li>
                    <li className="px-3">
                       <Link to="/contact">Contact Us</Link> 

                    </li>
                     
                    <li className="px-3">cart</li>
                <button className="loggin" onClick={()=>{
                 btnreact === "Login"   //note how we can use the if statement
                   ? setbtnreact("logout")
                   : setbtnreact("Login"); // here we can see the reconsilation of dom, open the console serch for this button we when we click on this button we can see the chnages at that particular code . 
                   }   // react is rendering the whole header but only the button got chnaged due to minimalistic update of dom , but the header is also got rendered .
                }
                >
                  {btnreact}
                </button>
             </ul>
           </div>
        </div>
    );

};

export default Header;