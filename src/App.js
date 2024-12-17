/* food ordering app 
 1] -- planning -> UI design 
 2] --> header component - home 
                           logo
                           cart
        body component -  returant images 
                          with ratings and text description 
                          search bar
                          resturant container 
                             - resturanst card 
                                - ing
                                - name of the resturant , star rating , cuisines, delivery time 
        foter          -  copyright 
                          about us 
                          basic information*/
                  
import "../index.css";
//import Menulist from "./components/Menulist";
import RestaurantMenu from "./components/RestaurantMenu";
import Body from "./components/Body";                            // carefull while changing the name, it will automatically change the nmae of the file where is has used
import Header from "./components/Header";
import RestaurantCard from "./components/ReataurantCard";
import React, {lazy, Suspense} from "react";    // this is given by react only 
import ReactDOM from "react-dom/client";  
import About from "./components/About";
//import RestaurantMenu from "./components/Restaurant";
import Error from "./components/Error";
import Contact from "./components/contact_us";

import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"; // it will create a routimg configuration for the router, here cr 
import Grocery from "./components/Grocery";
//import Grocery from "./components/Grocery"; now we dont need this once we have provided to the import fucntion [the path], which is given by react only, inside the lazy function[given by react]


const  Gerocery = lazy(() =>import("./components/Grocery"));
// why are we doing all these-- > so that we can load the grocery as lazy laoding [when ever it needed than only its jsz will get loaded]
// we can see it on the dist folder that grocery has its own js file .
// when we click on grocery than it will do lazzy loading, it will take few sec to load it, meanwhile it will thorugh the error bcz it wont get the o/p as per need , to handle this we need Suspense [a compoent given by react]


const Header = () => {
    return (
        <div className="header"> 
          <div className="Logo-container">
             <img 
             className="logo"
             src= "" />
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
// const StyleCard = {

// }; this is how we  have created the obj. which is used to style the things up inside the jsx
/* here StyleCard is the js object */ 

 //previously I am destructuring the object inside the parametre --> now I am using the real time data sent through props
    //now I am destructuring the object, while receiving it --> this is a part of js --> and to use these values we just need to put the varibale name thats it , now we no longer need the props.variable name 
    // the props here is the js object , now if need to use the props here thn we must destructure it  

// const resList = [
//   {
//     "info": {
//       "id": "150616",
//       "name": "Atul Sandwich And Cafe",
//       "cloudinaryImageId": "ey8y01lrehqje169frb8",
//       "locality": "Old Palasia",
//       "areaName": "Old Palasia",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "Fast Food",
//         "North Indian",
//         "Indian",
//         "Chinese",
//         "Snacks"
//       ],
//       "avgRating": 4.5,
//       "parentId": "37696",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 73,
//         "lastMileTravel": 7.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "70-75 mins",
//         "lastMileTravelString": "7.9 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-09-03 07:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "FREE ITEM"
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.3",
//           "ratingCount": "100+"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/indore/atul-sandwich-and-cafe-old-palasia-rest150616",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//     "info": {
//       "id": "541135",
//       "name": "Midnight Cravings",
//       "cloudinaryImageId": "l1zjaqohmylrmp7jim3c",
//       "locality": "AB Road",
//       "areaName": "Midnight Cravings",
//       "costForTwo": "₹200 for two",
//       "cuisines": [
//         "North Indian",
//         "Chinese",
//         "Sweets",
//         "Biryani",
//         "Tandoor"
//       ],
//       "avgRating": 3.8,
//       "parentId": "135948",
//       "avgRatingString": "3.8",
//       "totalRatingsString": "100+",
//       "sla": {
//         "deliveryTime": 70,
//         "lastMileTravel": 7.3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "65-70 mins",
//         "lastMileTravelString": "7.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-09-03 09:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/indore/midnight-cravings-ab-road-midnight-cravings-rest541135",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//     "info": {
//       "id": "855905",
//       "name": "Pizza 99",
//       "cloudinaryImageId": "d9b5570d65d8600f10d985a817e0f0ff",
//       "locality": "Somnath Ki Juni Chal",
//       "areaName": "New Palasia",
//       "costForTwo": "₹200 for two",
//       "cuisines": [
//         "Pizzas",
//         "Pastas",
//         "Fast Food",
//         "Burgers",
//         "Momos",
//         "rolls",
//         "Snacks",
//         "Beverages"
//       ],
//       "avgRating": 3.4,
//       "veg": true,
//       "parentId": "10720",
//       "avgRatingString": "3.4",
//       "totalRatingsString": "50+",
//       "sla": {
//         "deliveryTime": 50,
//         "lastMileTravel": 6.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "6.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-09-03 07:59:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "10% OFF",
//         "subHeader": "UPTO ₹40"
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "isNewlyOnboarded": true,
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/indore/pizza-99-somnath-ki-juni-chal-new-palasia-rest855905",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//     "info": {
//       "id": "804422",
//       "name": "Rominus Pizza",
//       "cloudinaryImageId": "0c3feef81e1c4e6f0e8ff80671b8911b",
//       "locality": "Ward no 20",
//       "areaName": "New Palasia",
//       "costForTwo": "₹200 for two",
//       "cuisines": [
//         "Pizzas"
//       ],
//       "avgRating": 3.8,
//       "veg": true,
//       "parentId": "480080",
//       "avgRatingString": "3.8",
//       "totalRatingsString": "50+",
//       "sla": {
//         "deliveryTime": 49,
//         "lastMileTravel": 7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "7.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-09-03 23:59:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹100"
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/indore/rominus-pizza-ward-no-20-new-palasia-rest804422",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//     "info": {
//       "id": "738906",
//       "name": "La mino'z Pizza",
//       "cloudinaryImageId": "c1981ddcb25a9080f0dbbfe14c037500",
//       "locality": "Bituminous Rd",
//       "areaName": "New Palasia",
//       "costForTwo": "₹299 for two",
//       "cuisines": [
//         "Pizzas",
//         "Fast Food"
//       ],
//       "avgRating": 3.6,
//       "veg": true,
//       "parentId": "438771",
//       "avgRatingString": "3.6",
//       "totalRatingsString": "100+",
//       "sla": {
//         "deliveryTime": 60,
//         "lastMileTravel": 7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "7.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-09-03 23:59:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/indore/la-minoz-pizza-bituminous-rd-new-palasia-rest738906",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//     "info": {
//       "id": "890063",
//       "name": "Domineo's Pizzeria",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/16/49f77455-fc67-4170-8fcc-04392e0c5b36_890063.jpg",
//       "locality": "Krishnodaya Nagar",
//       "areaName": "New Palasia",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "Fast Food"
//       ],
//       "veg": true,
//       "parentId": "520293",
//       "avgRatingString": "NEW",
//       "sla": {
//         "deliveryTime": 50,
//         "lastMileTravel": 6.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "6.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-09-04 05:30:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {
        
//       },
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "isNewlyOnboarded": true,
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/indore/domineos-pizzeria-krishnodaya-nagar-new-palasia-rest890063",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//     "info": {
//       "id": "304902",
//       "name": "Chai Thikana",
//       "cloudinaryImageId": "cjhdqthzjl8c2cv9gib4",
//       "locality": "South Tukoganj",
//       "areaName": "Manorama Ganj",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "Fast Food",
//         "Beverages",
//         "Cafe",
//         "Burgers",
//         "Bakery",
//         "Desserts",
//         "Tex-Mex",
//         "Snacks"
//       ],
//       "avgRating": 4.5,
//       "veg": true,
//       "parentId": "57186",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 44,
//         "lastMileTravel": 6.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "40-45 mins",
//         "lastMileTravelString": "6.9 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-09-03 23:15:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "40% OFF",
//         "subHeader": "UPTO ₹80"
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/indore/chai-thikana-south-tukoganj-manorama-ganj-rest304902",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//     "info": {
//       "id": "325970",
//       "name": "Udipi",
//       "cloudinaryImageId": "f4cd3goewhpue0govkha",
//       "locality": "Kanadia Main Road",
//       "areaName": "Telephone Nagar",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "South Indian",
//         "Chinese",
//         "Fast Food"
//       ],
//       "avgRating": 4.1,
//       "veg": true,
//       "parentId": "418687",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 45,
//         "lastMileTravel": 8.5,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "8.5 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-09-03 23:30:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50"
//       },
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/indore/udipi-kanadia-main-road-telephone-nagar-rest325970",
//       "text": "RESTAURANT_MENU",
//       "type": "WEBLINK"
//     },
//     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   }
// ];/* the object is below the recquired code than is there any issue */



// const RestaurantCard = (props) => { 
//   const {resData} = props;
//   const {cloudinaryImageId, name, cuisines , avgRatingString, sla: {deliveryTime}} =resData?.info;
//   // following the best practices here --> directly destructuring it and using as a variable 
//   //  ? here is the optional chanining 
//     return ( 
//       <div className="res-card" style={{backgroundColor: "babypink"}}>  
//       {/* note: Resturnt card is a react compopnent it reutrns jsx we are using 2 brackets  bcz 1st one is bcz of putting js inside the jsx and
//       the 2nd one is for passing the object literals  */}
//           <img
//             className="res-logo"
//             alt="res-logo"
//             src={
//                   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
//                   + resData.info.cloudinaryImageId
//             }
//             />
//                 {/* // here we are dinamically changing the img with the data from resObj
//                 all the images are hosted on the cdn and we are using these cdn links to get the image  */}
             
//              {/* we are adding the cloudinary id to the url --> this is js code hence for that we need to put the curly braces  */}
//              {/* inside the course swiggy is using the cloudinary cdn {css} but while we are feting the information we are not getting it -- instead we have half pf the link and 
//              rest of the cloudinary imag will be generated by adding the id to it -- by changing the id we can generate other img */}
//              <h1>{name}</h1>  
            
//             {/* join here is used to seperate the cuisines with comma */}
//              <h4>{cuisines.join(",")}</h4>
//              <h4>{avgRatingString}</h4> 
//              <h4>{deliveryTime} minutes</h4>  
            
//              {/* carefully check the api given who is umder what  */}
//             {/* <h4>{resData.info.costForTwo}</h4> */} 
//       </div>
//     );
// };

// I am commeneting it out bcz I have copied it inside the componen


/*does here [ResturantCard] the style refers to the css style ?, this res-card is showing all the resturants and display all its properties ,l have doubt like I need to create the blocks 
so that it will contain all the returants list , how can we create them ? */
/* we are adding style card, in react if we want to style things that to inline than we need to pass the js object */
/* we can also write the style like style = {{backgroundcolo: red}} --> this is telling that 1st bracket is js */







// const Body = () => {
//     return(
//         <div className="body">
//            <div className ="search">Search</div>
//            <div className="rest-container">
//               {/* <ResturantCard // I have removed the old method--> copied the real api data from the swiggy  
//               resData = {reslist[0]} />  */}
//               {/* <ResturantCard resData={reslist[1]}/>
//               <ResturantCard resData={reslist[2]}/>
//               <ResturantCard resData={reslist[3]}/>
//               <ResturantCard resData={reslist[4]}/>
//               <ResturantCard resData={reslist[5]}/>
//               <ResturantCard resData={reslist[6]}/> */}
//               {resList.map((restaurant) => (
                // <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
//               )) }
              
//              {/* we are using the key to let react know that it is the new card and need to render only this ---> great optimisation this is the only reason to provie the id , make a 
//              practice to provide the id on each react componet, and this id is provided by the api only or we can also use the index which will automatically get updated --> but this is not recommmended by reat doc, as if the order of the element gets changes than it will an issue  */}

//              {/* key point to note here is resData "name" should be same when we pass into the props and while receiving and destructuring the object  */}
//               {/* the above is the conflict driven ui , we are dynamically chaning the data  */}

//               {/* here we are iterating over the array of obj. where restaurant is the variable to iterate and we are rendering RestaurantCard react component each time And
//               we are passing the restData as a parametre where it will be received inside the props at RestaurantCard component  */}
//               {/* I want to take all the elements at once not one by one so we are using the map funciton which will help us 
//               to reduce the code , these two lines are very powerful now we no longer needed to look after how many obj are there map will take care of it  */}
              
//               {/* <ResturantCard   // I am not able to see the 2nd resturnt card option 
//                  resName="KFC"  // here we are manually putting the parameters, comment is done by cntrl slash 
//                 cuisine="Burger, french fries, chiken wings"/>  */}
//               {/* I was getting the error bcz I am not passing the data the second cart that i had created hence after commenting it out code is sucessfully running  */}
              
//            </div>
//         </div>
//     ) /*I didnt get resName is a variable used to get the values and place the values for the rest card. and doing it for all of container
//      2] if any new resturant is need to open whan how it will addded to it ? */
// } -->>> I have commented it because I have alredy taken a copy of this body into the component 
/* when we need to reuse a particular funcationality than create a component and use it again n again */
/* Now we are passing the props to the functional component[which is nothing but js function] -->{similar to passing arguments to the function } , this is used for making things dynamic like passing the props
to component , so that we can use the same cart again and again just by changing the values by passing props  */
const AppLayout = () => {
    return (
      <div className= "app">
        <Header />
        <Outlet /> 
    
        {/* now I need to place particular element {componet} according to the route -> for that react-router-dom provide a component named outlet -> which will be replaced according to the router path
            as it will replace it automatically nothing to do it extenally,  we cant find its[Outlet] html, bcz it is replaced with the other component we  can see the other replaced component at html
        */}
      </div>
    );
};

// now we  are creating a router and than configure that router --> means what will happen on  a specific route what ever be the path we are giving them it will direct to it .
// it takes the array of object of path
const appRouter = createBrowserRouter([
  {
   path: "/", // this is root route
   element : <AppLayout />,
  //  if the path is "/" than load this element {here it is Appplayout component}
  children: 
  [
    {
      path: "/",
      element: <Body />, // keep note of the commas at route
    },
    {
      path: "/home",
      element: <Body />, // keep note of the commas at route
    },
    { // to  keep the header and footer at its own place we need to create the child of app layout where we route to other pages
      path: "/about",  //curently it is not working if we click on the swiggy page header--> just creating the configuration doesnt work , we need to pass it to the render page--> that is done by RouterProvider{this is also a compomnent} [ this provides the routing configuration to the app]which is also given by createRouterDom
      element: < About/>,
    },
    {
      path: "/grocery",
      element: <Suspense fallback={
        <h1>Loding the page !!</h1>}>
           <Grocery /> 
      </Suspense>, 
      // we are using the Suspense and fallback so that it can tell for that particular time what can we show .
    },
    {
      path: "/contact",
      element: <Contact />,
    }, // now about and contact have become the child of app layout
   {
     path: "/restaurant/:resid", // here we are using the dynamic data for the restaurant which can be achived by :[any id] 
     element: <RestaurantMenu />,
   },
  
  ] ,
  
  errorElement: <Error />, 
   // this is error handler component , it is cpatured by errorElement not just simple element
  },
  
]); 

// if we give the wrong url or path than we get the error msg 404 not found , actully there were many errors reactRouterDom is creating a page and showing this error to us, now we are tring to implement our own error page
 
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);  I have commented it bcz we need to pass the applayout to router provider so that it will render the routing path
root.render(<RouterProvider router = {appRouter} />  ); // here app router is the configuration of the router we are passing it to render 

 /* this is a common practice to create a main app component and placing the other cpomponent 
inside of it */
/* conflict design ui--> our website is driven by data let say offer section present at indore is not the same as offer at Mumbai , this is depend on the data that we get through api 
let say offers shown  for delhi is blue , but we need offer shown at kolkata is green than we use conflict driven ui we write the ui once and change according to the data */

/* I have used the code npm start to start the app not npm run start --> now we are creating file for each new component---> name of the file should  be the same as the name of the component ---> increase readability--> the extensions that we can use are jsx, js--> doesnt make any differnece*/