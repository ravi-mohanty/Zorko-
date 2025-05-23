import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState();

  const fetchTheData = async () => {
    try {
      const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
      const jsonData = await response.json();
      setResInfo(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchTheData();
  }, []);

 
  return resInfo;
};

export default useRestaurantMenu;