// here we are writing class based component

import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            count: 0,
            // this is similiar to const [count] = useState(0);
        }
        
    }
   
    render() {
        const {name, location} = this.props;
        const {count} = this.state;

        return (
            <div>
                {/* <h1>Name : Ravi Mohanty</h1>
                <h1> gitHub : @gitHub</h1> */}
                <h1> name : {name}</h1>   
                <h1> Count : {count}</h1>    
                {/* here without destructuring we cant use count like this either use it this.state.count  */}
                
                <button onClick={()=>{
                    //never directly update the state variable, react provide a setstate fuc. that is used for setting the state of the state var.
                    this.setState({count : this.state.count + 1});
                // when I am using the curely braces than I can using the colon but when I dnt use it just use the equal to sign 
                  }
                }
            > Count Increase </button> 
                  {/* // +++ this is very important to save the file and than use it exportedly  */}
                <h1> location : {location}</h1> 
                {/* <h1> Message class based : {user1}</h1> */}
                {/* <h1> This is class based component </h1> */}
            </div>
        );
    };
};
export default UserClass;   

// when we say we are loading the class base compoent , than that means we are creating the instance of the class --> than constructor is called, and this is the best place to create state variables, 
//previously there were not hooks so we were using the state variables only, "this.state" creates a state variable which is whole new big obj. which contain the state variables 