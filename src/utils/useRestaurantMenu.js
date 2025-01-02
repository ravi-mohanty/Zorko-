 import { useEffect, useState } from "react"

 
 const useRestaurantMenu =(resId) => {
     const [resInfo, setresInfo] = useState();
     useEffect(() => {
       fetchTheData();
     }, []);
 

 const fetchTheData = async() => {
  const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
  const jsonData = await response.json();
  //console.log(jsonData);
  setresInfo(jsonData);
 };
  return resInfo;

 };

 export default useRestaurantMenu;