import apiData from "../utils/apiData";
import { useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom"; // what is there in the param given by this useParam hook from react router dom

// here I am tring to fetch the data from body which is both fetching and displaying the data but I failed , 
// what I was trying the fetching of the restaurants should be done here [within the component and we will display it through the component , all its logic will be fetched here ]
const RestaurantMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
   // const {resId} = useParams();
   // const {resInfo} = useRestaurantMenu(resId);
   // console.log(param);
  
    useEffect(() => {
      const menu = apiData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel;
      setMenuItems(menu);
    }, []); // we are creating the emepty dependecy array so that while our comp. get render for the first time than only useEffect get called , if we dont use the empty dep. array than every time the comp. get render this useEff will get called 
    // and we doent want that 
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Recommended Items</h2>
        <div className="space-y-4">
          {menuItems.map((item) => (
            <div 
              key={item.dish.info.id} 
              className="border p-4 rounded-lg shadow-sm"
            >
              <h3 className="font-semibold text-lg">{item.dish.info.name}</h3>
              <p className="text-gray-600">
                Price: ₹{(item.dish.info.price / 100).toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">ID: {item.dish.info.id}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default RestaurantMenu;
