// this is the custom hook this will contain the fetch logic , tha basi difference between the hook and the component is hook dosnt return jsx, custom hook cant be used without component.
import { useState, useEffect } from "react";
//const [resInfo, setresInfo] = useState();
const useRestaurantMenu = () =>{
      const [listOfRestaurants, setlistOfRestaurant]=useState([]); // need to check why we are passing the empty array here --> so that we cans store the list of restaurants returned .
      const [filteredRestaurant, setfilteredRestaurant] = useState([]);
      useEffect(()=> { 
        fetchData();
       }, []); 
      

    const fetchData = async () => {
        try {
              const response = await fetch('http://localhost:3000/api/restaurants?lat=12.9715987&lng=77.5945627');
               const json = await response.json();
     
       //          // Assuming the structure you mentioned is correct
       //            if (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
       //            setlistOfRestaurant(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
       //            } else {
       //             console.error('Unexpected API response structure:', json);
       //             }
       //        } catch (error) {
       //             console.error('Error fetching restaurants:', error);
       //         }
       if (json?.data?.cards) {
         // Find the card that contains the restaurant list
         const restaurantCard = json.data.cards.find(card => 
           card?.card?.card?.gridElements?.infoWithStyle?.restaurants
         );
         console.log(restaurantCard +"ravi yess");
 
           if (restaurantCard) {
             setlistOfRestaurant(restaurantCard.card.card.gridElements.infoWithStyle.restaurants);
             setfilteredRestaurant(restaurantCard.card.card.gridElements.infoWithStyle.restaurants);
           } else {
           console.error('Could not find restaurant data in the API response:', json);
         }
          } else {
           console.error('Unexpected API response structure:', json);
           }
         } catch (error) {
          console.error('Error fetching restaurants:', error);
        }
        return listOfRestaurants; // we are returning the value from the custom hook
        }; 
}
export default useRestaurantMenu;

// this useRestaurantMenu I have created so that I put the fetch logic of the restauant menu here, but I am using the api data directly , hence I am not using it , wrongly I have put the api fetch of all the restaurants here , I want to seperate the logic of fetching 
// restaurant data here so that the component get light, but it doesnt work ....I have learned to create the custom hook here , but unable to take it out and use it ,