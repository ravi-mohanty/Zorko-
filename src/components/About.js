
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
     <div className="user-card">
        <User user ={"this is passing the parameter inside the component and we will see it onscreen, and the curely braces it for using the js"}/> 
        <UserClass name = {"Ravi Mohanty"} location = {"from indore"}/>
        {/* make note of it that use the camel case and dont forgot to use it here   */}
        <h1>About</h1>
        <h1>This is namaste react by Ravi</h1>    
        
     </div>
  ); // dont forgot to place this semicolon at the end
   
};// dont forgot to place this semicolon at the end
export default About;

//here we are using the class base componenet 