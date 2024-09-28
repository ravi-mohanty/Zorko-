import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header"> 
          <div className="Logo-container">
             <img 
             className="logo"
             src = {LOGO_URL} />
           </div>
           <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>cart</li>
             </ul>
           </div>
        </div>
    );

};

export default Header;