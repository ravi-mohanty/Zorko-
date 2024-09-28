
 import resList from "../utils/mockData"
import RestaurantCard from "./ReataurantCard";
import { useEffect, useState } from "react";
import shimmer from "./shimmer"; // we are importing it because we need it 

// two approachs --> load > api call >  render -----> bad user experince nothing has shown all of a sudden everything is shown
//                   load > render > api call > render -----> better user experience skeletin is loaded and than ui is loaded --> better ux .

const Body = () => {
  //  let listOfRestaurants = [
  //     {
      
  //        "info": {
  //          "id": "150616",
  //          "name": "Atul Sandwich And Cafe",
  //          "cloudinaryImageId": "ey8y01lrehqje169frb8",
  //          "locality": "Old Palasia",
  //          "areaName": "Old Palasia",
  //          "avgRating": 4.5,
  //          "parentId": "37696",
  //          "avgRatingString": "4.5",
  //          "totalRatingsString": "1K+",
  //          "cuisines": [
  //           "Fast Food",
  //           "North Indian",
  //           "Indian",
  //           "Chinese",
  //           "Snacks"
  //         ],
  //         "sla": {
  //         "deliveryTime": 73,
  //         "lastMileTravel": 7.9,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "70-75 mins",
  //         "lastMileTravelString": "7.9 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //         }
  //        }
  //     }
  //  ];

    let [listOfRestaurants, setlistOfRestaurant]=useState([]
     
    //resList  -----> I jave commmented it out after I have added the swiggy api than I have placed the comment bcz we are dynamically changing the data 
      // {
      //    "info": {
      //      "id": "150616",
      //      "name": "Atul Sandwich And Cafe",
      //      "cloudinaryImageId": "ey8y01lrehqje169frb8",
      //      "locality": "Old Palasia",
      //      "areaName": "Old Palasia",
      //      "costForTwo": "₹150 for two",
      //      "cuisines": [
      //        "Fast Food",
      //        "North Indian",
      //        "Indian",
      //        "Chinese",
      //        "Snacks"
      //      ],
      //      "avgRating": 4.5,
      //      "parentId": "37696",
      //      "avgRatingString": "4.5",
      //      "totalRatingsString": "1K+",
      //      "sla": {
      //        "deliveryTime": 73,
      //        "lastMileTravel": 7.9,
      //        "serviceability": "SERVICEABLE",
      //        "slaString": "70-75 mins",
      //        "lastMileTravelString": "7.9 km",
      //        "iconType": "ICON_TYPE_EMPTY"
      //      },
      //      "availability": {
      //        "nextCloseTime": "2024-09-03 07:00:00",
      //        "opened": true
      //      },
      //      "badges": {
      //        "imageBadges": [
      //          {
      //            "imageId": "v1695133679/badges/Pure_Veg111.png",
      //            "description": "pureveg"
      //          }
      //        ]
      //      },
      //      "isOpen": true,
      //      "type": "F",
      //      "badgesV2": {
      //        "entityBadges": {
      //          "imageBased": {
      //            "badgeObject": [
      //              {
      //                "attributes": {
      //                  "description": "pureveg",
      //                  "imageId": "v1695133679/badges/Pure_Veg111.png"
      //                }
      //              }
      //            ]
      //          },
      //          "textBased": {
                 
      //          },
      //          "textExtendedBadges": {
                 
      //          }
      //        }
      //      },
      //      "aggregatedDiscountInfoV3": {
      //        "header": "FREE ITEM"
      //      },
      //      "orderabilityCommunication": {
      //        "title": {
               
      //        },
      //        "subTitle": {
               
      //        },
      //        "message": {
               
      //        },
      //        "customIcon": {
               
      //        }
      //      },
      //      "differentiatedUi": {
      //        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      //        "differentiatedUiMediaDetails": {
      //          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      //          "lottie": {
                 
      //          },
      //          "video": {
                 
      //          }
      //        }
      //      },
      //      "reviewsSummary": {
             
      //      },
      //      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      //      "restaurantOfferPresentationInfo": {
             
      //      },
      //      "externalRatings": {
      //        "aggregatedRating": {
      //          "rating": "4.3",
      //          "ratingCount": "100+"
      //        },
      //        "source": "GOOGLE",
      //        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      //      },
      //      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      //    },
      //    "analytics": {
      //      "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
      //    },
      //    "cta": {
      //      "link": "https://www.swiggy.com/city/indore/atul-sandwich-and-cafe-old-palasia-rest150616",
      //      "text": "RESTAURANT_MENU",
      //      "type": "WEBLINK"
      //    },
      //    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      //  },
      //  {
      //    "info": {
      //      "id": "541135",
      //      "name": "Midnight Cravings",
      //      "cloudinaryImageId": "l1zjaqohmylrmp7jim3c",
      //      "locality": "AB Road",
      //      "areaName": "Midnight Cravings",
      //      "costForTwo": "₹200 for two",
      //      "cuisines": [
      //        "North Indian",
      //        "Chinese",
      //        "Sweets",
      //        "Biryani",
      //        "Tandoor"
      //      ],
      //      "avgRating": 3.8,
      //      "parentId": "135948",
      //      "avgRatingString": "3.8",
      //      "totalRatingsString": "100+",
      //      "sla": {
      //        "deliveryTime": 70,
      //        "lastMileTravel": 7.3,
      //        "serviceability": "SERVICEABLE",
      //        "slaString": "65-70 mins",
      //        "lastMileTravelString": "7.3 km",
      //        "iconType": "ICON_TYPE_EMPTY"
      //      },
      //      "availability": {
      //        "nextCloseTime": "2024-09-03 09:00:00",
      //        "opened": true
      //      },
      //      "badges": {
             
      //      },
      //      "isOpen": true,
      //      "type": "F",
      //      "badgesV2": {
      //        "entityBadges": {
      //          "imageBased": {
                 
      //          },
      //          "textBased": {
                 
      //          },
      //          "textExtendedBadges": {
                 
      //          }
      //        }
      //      },
      //      "aggregatedDiscountInfoV3": {
      //        "header": "60% OFF",
      //        "subHeader": "UPTO ₹120"
      //      },
      //      "orderabilityCommunication": {
      //        "title": {
               
      //        },
      //        "subTitle": {
               
      //        },
      //        "message": {
               
      //        },
      //        "customIcon": {
               
      //        }
      //      },
      //      "differentiatedUi": {
      //        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      //        "differentiatedUiMediaDetails": {
      //          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      //          "lottie": {
                 
      //          },
      //          "video": {
                 
      //          }
      //        }
      //      },
      //      "reviewsSummary": {
             
      //      },
      //      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      //      "restaurantOfferPresentationInfo": {
             
      //      },
      //      "externalRatings": {
      //        "aggregatedRating": {
      //          "rating": "--"
      //        }
      //      },
      //      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      //    },
      //    "analytics": {
      //      "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
      //    },
      //    "cta": {
      //      "link": "https://www.swiggy.com/city/indore/midnight-cravings-ab-road-midnight-cravings-rest541135",
      //      "text": "RESTAURANT_MENU",
      //      "type": "WEBLINK"
      //    },
      //    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      //  },
      //  {
      //    "info": {
      //      "id": "855905",
      //      "name": "Pizza 99",
      //      "cloudinaryImageId": "d9b5570d65d8600f10d985a817e0f0ff",
      //      "locality": "Somnath Ki Juni Chal",
      //      "areaName": "New Palasia",
      //      "costForTwo": "₹200 for two",
      //      "cuisines": [
      //        "Pizzas",
      //        "Pastas",
      //        "Fast Food",
      //        "Burgers",
      //        "Momos",
      //        "rolls",
      //        "Snacks",
      //        "Beverages"
      //      ],
      //      "avgRating": 3.4,
      //      "veg": true,
      //      "parentId": "10720",
      //      "avgRatingString": "3.4",
      //      "totalRatingsString": "50+",
      //      "sla": {
      //        "deliveryTime": 50,
      //        "lastMileTravel": 6.7,
      //        "serviceability": "SERVICEABLE",
      //        "slaString": "45-50 mins",
      //        "lastMileTravelString": "6.7 km",
      //        "iconType": "ICON_TYPE_EMPTY"
      //      },
      //      "availability": {
      //        "nextCloseTime": "2024-09-03 07:59:00",
      //        "opened": true
      //      },
      //      "badges": {
             
      //      },
      //      "isOpen": true,
      //      "type": "F",
      //      "badgesV2": {
      //        "entityBadges": {
      //          "imageBased": {
                 
      //          },
      //          "textBased": {
                 
      //          },
      //          "textExtendedBadges": {
                 
      //          }
      //        }
      //      },
      //      "aggregatedDiscountInfoV3": {
      //        "header": "10% OFF",
      //        "subHeader": "UPTO ₹40"
      //      },
      //      "orderabilityCommunication": {
      //        "title": {
               
      //        },
      //        "subTitle": {
               
      //        },
      //        "message": {
               
      //        },
      //        "customIcon": {
               
      //        }
      //      },
      //      "differentiatedUi": {
      //        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      //        "differentiatedUiMediaDetails": {
      //          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      //          "lottie": {
                 
      //          },
      //          "video": {
                 
      //          }
      //        }
      //      },
      //      "reviewsSummary": {
             
      //      },
      //      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      //      "isNewlyOnboarded": true,
      //      "restaurantOfferPresentationInfo": {
             
      //      },
      //      "externalRatings": {
      //        "aggregatedRating": {
      //          "rating": "--"
      //        }
      //      },
      //      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      //    },
      //    "analytics": {
      //      "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
      //    },
      //    "cta": {
      //      "link": "https://www.swiggy.com/city/indore/pizza-99-somnath-ki-juni-chal-new-palasia-rest855905",
      //      "text": "RESTAURANT_MENU",
      //      "type": "WEBLINK"
      //    },
      //    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      //  },
      //  {
      //    "info": {
      //      "id": "804422",
      //      "name": "Rominus Pizza",
      //      "cloudinaryImageId": "0c3feef81e1c4e6f0e8ff80671b8911b",
      //      "locality": "Ward no 20",
      //      "areaName": "New Palasia",
      //      "costForTwo": "₹200 for two",
      //      "cuisines": [
      //        "Pizzas"
      //      ],
      //      "avgRating": 3.8,
      //      "veg": true,
      //      "parentId": "480080",
      //      "avgRatingString": "3.8",
      //      "totalRatingsString": "50+",
      //      "sla": {
      //        "deliveryTime": 49,
      //        "lastMileTravel": 7,
      //        "serviceability": "SERVICEABLE",
      //        "slaString": "45-50 mins",
      //        "lastMileTravelString": "7.0 km",
      //        "iconType": "ICON_TYPE_EMPTY"
      //      },
      //      "availability": {
      //        "nextCloseTime": "2024-09-03 23:59:00",
      //        "opened": true
      //      },
      //      "badges": {
             
      //      },
      //      "isOpen": true,
      //      "type": "F",
      //      "badgesV2": {
      //        "entityBadges": {
      //          "imageBased": {
                 
      //          },
      //          "textBased": {
                 
      //          },
      //          "textExtendedBadges": {
                 
      //          }
      //        }
      //      },
      //      "aggregatedDiscountInfoV3": {
      //        "header": "50% OFF",
      //        "subHeader": "UPTO ₹100"
      //      },
      //      "orderabilityCommunication": {
      //        "title": {
               
      //        },
      //        "subTitle": {
               
      //        },
      //        "message": {
               
      //        },
      //        "customIcon": {
               
      //        }
      //      },
      //      "differentiatedUi": {
      //        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      //        "differentiatedUiMediaDetails": {
      //          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      //          "lottie": {
                 
      //          },
      //          "video": {
                 
      //          }
      //        }
      //      },
      //      "reviewsSummary": {
             
      //      },
      //      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      //      "restaurantOfferPresentationInfo": {
             
      //      },
      //      "externalRatings": {
      //        "aggregatedRating": {
      //          "rating": "--"
      //        }
      //      },
      //      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      //    },
      //    "analytics": {
      //      "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
      //    },
      //    "cta": {
      //      "link": "https://www.swiggy.com/city/indore/rominus-pizza-ward-no-20-new-palasia-rest804422",
      //      "text": "RESTAURANT_MENU",
      //      "type": "WEBLINK"
      //    },
      //    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      //  },
      //  {
      //    "info": {
      //      "id": "738906",
      //      "name": "La mino'z Pizza",
      //      "cloudinaryImageId": "c1981ddcb25a9080f0dbbfe14c037500",
      //      "locality": "Bituminous Rd",
      //      "areaName": "New Palasia",
      //      "costForTwo": "₹299 for two",
      //      "cuisines": [
      //        "Pizzas",
      //        "Fast Food"
      //      ],
      //      "avgRating": 3.6,
      //      "veg": true,
      //      "parentId": "438771",
      //      "avgRatingString": "3.6",
      //      "totalRatingsString": "100+",
      //      "sla": {
      //        "deliveryTime": 60,
      //        "lastMileTravel": 7,
      //        "serviceability": "SERVICEABLE",
      //        "slaString": "55-60 mins",
      //        "lastMileTravelString": "7.0 km",
      //        "iconType": "ICON_TYPE_EMPTY"
      //      },
      //      "availability": {
      //        "nextCloseTime": "2024-09-03 23:59:00",
      //        "opened": true
      //      },
      //      "badges": {
      //        "imageBadges": [
      //          {
      //            "imageId": "v1695133679/badges/Pure_Veg111.png",
      //            "description": "pureveg"
      //          }
      //        ]
      //      },
      //      "isOpen": true,
      //      "type": "F",
      //      "badgesV2": {
      //        "entityBadges": {
      //          "imageBased": {
      //            "badgeObject": [
      //              {
      //                "attributes": {
      //                  "description": "pureveg",
      //                  "imageId": "v1695133679/badges/Pure_Veg111.png"
      //                }
      //              }
      //            ]
      //          },
      //          "textBased": {
                 
      //          },
      //          "textExtendedBadges": {
                 
      //          }
      //        }
      //      },
      //      "aggregatedDiscountInfoV3": {
      //        "header": "60% OFF",
      //        "subHeader": "UPTO ₹120"
      //      },
      //      "orderabilityCommunication": {
      //        "title": {
               
      //        },
      //        "subTitle": {
               
      //        },
      //        "message": {
               
      //        },
      //        "customIcon": {
               
      //        }
      //      },
      //      "differentiatedUi": {
      //        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      //        "differentiatedUiMediaDetails": {
      //          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      //          "lottie": {
                 
      //          },
      //          "video": {
                 
      //          }
      //        }
      //      },
      //      "reviewsSummary": {
             
      //      },
      //      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      //      "restaurantOfferPresentationInfo": {
             
      //      },
      //      "externalRatings": {
      //        "aggregatedRating": {
      //          "rating": "--"
      //        }
      //      },
      //      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      //    },
      //    "analytics": {
      //      "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
      //    },
      //    "cta": {
      //      "link": "https://www.swiggy.com/city/indore/la-minoz-pizza-bituminous-rd-new-palasia-rest738906",
      //      "text": "RESTAURANT_MENU",
      //      "type": "WEBLINK"
      //    },
      //    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      //  },
      //  {
      //    "info": {
      //      "id": "890063",
      //      "name": "Domineo's Pizzeria",
      //      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/16/49f77455-fc67-4170-8fcc-04392e0c5b36_890063.jpg",
      //      "locality": "Krishnodaya Nagar",
      //      "areaName": "New Palasia",
      //      "costForTwo": "₹150 for two",
      //      "cuisines": [
      //        "Fast Food"
      //      ],
      //      "veg": true,
      //      "parentId": "520293",
      //      "avgRatingString": "NEW",
      //      "sla": {
      //        "deliveryTime": 50,
      //        "lastMileTravel": 6.7,
      //        "serviceability": "SERVICEABLE",
      //        "slaString": "45-50 mins",
      //        "lastMileTravelString": "6.7 km",
      //        "iconType": "ICON_TYPE_EMPTY"
      //      },
      //      "availability": {
      //        "nextCloseTime": "2024-09-04 05:30:00",
      //        "opened": true
      //      },
      //      "badges": {
             
      //      },
      //      "isOpen": true,
      //      "aggregatedDiscountInfoV2": {
             
      //      },
      //      "type": "F",
      //      "badgesV2": {
      //        "entityBadges": {
      //          "imageBased": {
                 
      //          },
      //          "textBased": {
                 
      //          },
      //          "textExtendedBadges": {
                 
      //          }
      //        }
      //      },
      //      "orderabilityCommunication": {
      //        "title": {
               
      //        },
      //        "subTitle": {
               
      //        },
      //        "message": {
               
      //        },
      //        "customIcon": {
               
      //        }
      //      },
      //      "differentiatedUi": {
      //        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      //        "differentiatedUiMediaDetails": {
      //          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      //          "lottie": {
                 
      //          },
      //          "video": {
                 
      //          }
      //        }
      //      },
      //      "reviewsSummary": {
             
      //      },
      //      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      //      "isNewlyOnboarded": true,
      //      "restaurantOfferPresentationInfo": {
             
      //      },
      //      "externalRatings": {
      //        "aggregatedRating": {
      //          "rating": "--"
      //        }
      //      },
      //      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      //    },
      //    "analytics": {
      //      "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
      //    },
      //    "cta": {
      //      "link": "https://www.swiggy.com/city/indore/domineos-pizzeria-krishnodaya-nagar-new-palasia-rest890063",
      //      "text": "RESTAURANT_MENU",
      //      "type": "WEBLINK"
      //    },
      //    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      //  },
      //  {
      //    "info": {
      //      "id": "304902",
      //      "name": "Chai Thikana",
      //      "cloudinaryImageId": "cjhdqthzjl8c2cv9gib4",
      //      "locality": "South Tukoganj",
      //      "areaName": "Manorama Ganj",
      //      "costForTwo": "₹150 for two",
      //      "cuisines": [
      //        "Fast Food",
      //        "Beverages",
      //        "Cafe",
      //        "Burgers",
      //        "Bakery",
      //        "Desserts",
      //        "Tex-Mex",
      //        "Snacks"
      //      ],
      //      "avgRating": 4.5,
      //      "veg": true,
      //      "parentId": "57186",
      //      "avgRatingString": "4.5",
      //      "totalRatingsString": "1K+",
      //      "sla": {
      //        "deliveryTime": 44,
      //        "lastMileTravel": 6.9,
      //        "serviceability": "SERVICEABLE",
      //        "slaString": "40-45 mins",
      //        "lastMileTravelString": "6.9 km",
      //        "iconType": "ICON_TYPE_EMPTY"
      //      },
      //      "availability": {
      //        "nextCloseTime": "2024-09-03 23:15:00",
      //        "opened": true
      //      },
      //      "badges": {
      //        "imageBadges": [
      //          {
      //            "imageId": "v1695133679/badges/Pure_Veg111.png",
      //            "description": "pureveg"
      //          }
      //        ]
      //      },
      //      "isOpen": true,
      //      "type": "F",
      //      "badgesV2": {
      //        "entityBadges": {
      //          "imageBased": {
      //            "badgeObject": [
      //              {
      //                "attributes": {
      //                  "description": "pureveg",
      //                  "imageId": "v1695133679/badges/Pure_Veg111.png"
      //                }
      //              }
      //            ]
      //          },
      //          "textBased": {
                 
      //          },
      //          "textExtendedBadges": {
                 
      //          }
      //        }
      //      },
      //      "aggregatedDiscountInfoV3": {
      //        "header": "40% OFF",
      //        "subHeader": "UPTO ₹80"
      //      },
      //      "orderabilityCommunication": {
      //        "title": {
               
      //        },
      //        "subTitle": {
               
      //        },
      //        "message": {
               
      //        },
      //        "customIcon": {
               
      //        }
      //      },
      //      "differentiatedUi": {
      //        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      //        "differentiatedUiMediaDetails": {
      //          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      //          "lottie": {
                 
      //          },
      //          "video": {
                 
      //          }
      //        }
      //      },
      //      "reviewsSummary": {
             
      //      },
      //      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      //      "restaurantOfferPresentationInfo": {
             
      //      },
      //      "externalRatings": {
      //        "aggregatedRating": {
      //          "rating": "--"
      //        }
      //      },
      //      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      //    },
      //    "analytics": {
      //      "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
      //    },
      //    "cta": {
      //      "link": "https://www.swiggy.com/city/indore/chai-thikana-south-tukoganj-manorama-ganj-rest304902",
      //      "text": "RESTAURANT_MENU",
      //      "type": "WEBLINK"
      //    },
      //    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      //  },
      //  {
      //    "info": {
      //      "id": "325970",
      //      "name": "Udipi",
      //      "cloudinaryImageId": "f4cd3goewhpue0govkha",
      //      "locality": "Kanadia Main Road",
      //      "areaName": "Telephone Nagar",
      //      "costForTwo": "₹150 for two",
      //      "cuisines": [
      //        "South Indian",
      //        "Chinese",
      //        "Fast Food"
      //      ],
      //      "avgRating": 4.1,
      //      "veg": true,
      //      "parentId": "418687",
      //      "avgRatingString": "4.1",
      //      "totalRatingsString": "1K+",
      //      "sla": {
      //        "deliveryTime": 45,
      //        "lastMileTravel": 8.5,
      //        "serviceability": "SERVICEABLE",
      //        "slaString": "45-50 mins",
      //        "lastMileTravelString": "8.5 km",
      //        "iconType": "ICON_TYPE_EMPTY"
      //      },
      //      "availability": {
      //        "nextCloseTime": "2024-09-03 23:30:00",
      //        "opened": true
      //      },
      //      "badges": {
             
      //      },
      //      "isOpen": true,
      //      "type": "F",
      //      "badgesV2": {
      //        "entityBadges": {
      //          "imageBased": {
                 
      //          },
      //          "textBased": {
                 
      //          },
      //          "textExtendedBadges": {
                 
      //          }
      //        }
      //      },
      //      "aggregatedDiscountInfoV3": {
      //        "header": "20% OFF",
      //        "subHeader": "UPTO ₹50"
      //      },
      //      "orderabilityCommunication": {
      //        "title": {
               
      //        },
      //        "subTitle": {
               
      //        },
      //        "message": {
               
      //        },
      //        "customIcon": {
               
      //        }
      //      },
      //      "differentiatedUi": {
      //        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      //        "differentiatedUiMediaDetails": {
      //          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      //          "lottie": {
                 
      //          },
      //          "video": {
                 
      //          }
      //        }
      //      },
      //      "reviewsSummary": {
             
      //      },
      //      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      //      "restaurantOfferPresentationInfo": {
             
      //      },
      //      "externalRatings": {
      //        "aggregatedRating": {
      //          "rating": "--"
      //        }
      //      },
      //      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      //    },
      //    "analytics": {
      //      "context": "seo-data-fdc79319-172a-46b7-80ed-98dd39af5e38"
      //    },
      //    "cta": {
      //      "link": "https://www.swiggy.com/city/indore/udipi-kanadia-main-road-telephone-nagar-rest325970",
      //      "text": "RESTAURANT_MENU",
      //      "type": "WEBLINK"
      //    },
      //    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      //  } // for now I have coppied the data directly as a defaukt value ,but if I need to change this value I need to do this with the help of setListrest.. varibale only
    );
    // it is a utility function that provides us super powerful variable and a fucntion that help  to update the variable , can we put something in btwn component name and the return statement ?
   // react is good at dom operations make it fast thats how react is fast 
   useEffect(()=> {
     fetchData();
   }, []);
   // we are using debugger --> when we put the debugger it will pause the code there itself 
   //use effect is another hook , is also a fucntion that is called after the render cycle , hence if we want something to be after the render cycle than we should put it inside the useEffect 

   // console.log("body rendered");

    let fetchData = async () => {
     let data = await fetch(
      "https://localhost:3001/api/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&collection=80373&tags=layout_CCS_Poha&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
     );
     // cors poliy is blockinng the swggiy api to CALL as we are calling it from our local , as it is preseent in different origin both the should be at same origin called as cors policy 
     console.log(data);
     const json = await data.json(); // time stamp -> 50 mins lec 6-------------------------------------<<<<<<<<< 
     setlistOfRestaurant(json.data.cards[3].card.card); // used to get the new updated data that we are getting from fetching the api . we are doing it here so that the page again got render and show the data on the page -- 4th step.
     // now after this I have deleted the resList (which is an array of object --> restaurant data, and also commenting the mock data import --not deleting the file just for reference, also ?. I am using optional chaining so that while passing things I should not loose the data)
    }; // curently it is showing the error  -- need to check in further upcomming vid.
      // console.log(json.data.cards[2].card.card);
    // we are using setListofRestaurant to update the ListOfRestautrant as we are getting the data from the api-> than we need to render the things again so that we can see the things at screen sent by the api 
    //as we have discussed ui load > render > api call > re-render things so that we can show them on the screen for that I have to update the useState variable with the help of SetuseSatate function , when we update the variable than react will automatically render the component we dont need to do it . 
  // we directly cant use the swiggy api as it is against the cros policy --> to bypass it we need to add a crome exetension "cors chrome extension"

   // use effect fucntion will be called after the render cycle is completed , though use effect is inside the body , use effect will be called after the compoent got rendered 
   // purpose --> if we want to perform any action after the render cycle than that thing we put inside the use effect 

// note : react element is actually a virtual dom--> the return thing inside the component having all the elements that crteates a virtual dom 
      // diff algorithm -> when there is change state react re-renders the component -->it checks the difference betwn the old and the new virtual dom aand updates the actual dom --> this is knon by react when we trigger the function that uis changing the state variable 

// note : first the render will work than after the use effect will work return is nothig but render as it will create virtual dom this check is done by the debugger , I have placed the debugger in the render (return) and another debugger at use effect or i can also use console.log here 
//          after putting the debugger than I refresh the page code breaks --> at first resume I can see the render is execuited till this point i cant see console log statemnet from use effect bcz first remder will execute than after use effect will run , at the second resume I can see the print statement from use effect (seen at console)
    
// fetch will return the promise, we can resolve it by using .then mathod , if we are using await where ever pronise object is resolved we use await with it, await resolves the promise object 

if(listOfRestaurants.length ===0)
{
  return <h1>loading......</h1> 
  // here we are using a shimmer  ui  ..
}

return(
        <div className="body">
           <div className ="filter">
             <button className="filter-btn"
               onClick={() => {
               const filteredList = listOfRestaurants.filter(
               (res)=>res.info.avgRating > 4
               );
                setlistOfRestaurant(filteredList);
                // Note --> dont forget to pass the variable to setListOfRestaurant as it contain all the filtered list 
                // console.log("clicked");
                // console.log(listOfRestaurants);
                }
              }
            >
               Top rated restaurants
            </button>

             {/* react can do faster dom manipulations thats y react is faster, here we want to show the restaurant that are having the avg rating 4.
             but how we can display that restaurant [combining the data layer and the ui layer combined] we should display those res. whos avg. rating is 4 only selected by the filter method 
            */}

           </div>
            {/* className is camel case make sure of it , this should return restaurant that has rating more than 4 */}
            <div className="rest-container">
              {/* <ResturantCard // I have removed the old method--> copied the real api data from the swiggy  
              resData = {reslist[0]} />  */}

              {/* <ResturantCard resData={reslist[1]}/>
              <ResturantCard resData={reslist[2]}/>
              esturantCard resData={reslist[3]}/>
              <ResturantCard resData={reslist[4]}/>
              <ResturantCard resData={reslist[5]}/>
              <ResturantCard resData={reslist[6]}/> */}
              
              
              { listOfRestaurants.map((restaurant)=>(
                  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                     
              ))
             }
              {/*Note --->  when we are using the curly braces than we have to use return but if we are using the moon braket than we dont need to use return  */}

               {/* {listOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
              )) }   */}
             {/* {listOfRestaurants.map((restaurant) => (
              <RestaurantCard 
                key={restaurant[3].card.card.info.id} // Access ID directly from restaurant object
                resList={restaurant[3].card.card.info} // Pass entire info object for RestaurantCard
              />
               ))}
               */}
             {/* we are using the map function --> having an array of object to display it without using any loop we are using map --> array is directly acessible through the map 
             now we want a filter to apply so we provide the filtered array to the map thats it  */}


             {/* we are using the key to let react know that it is the new card and need to render only this ---> great optimisation this is the only reason to provie the id , make a 
             practice to provide the id on each react componet, and this id is provided by the api only or we can also use the index which will automatically get updated --> but this is not recommmended by reat doc, as if the order of the element gets changes than it will an issue  */}

             {/* key point to note here is resData "name" should be same when we pass into the props and while receiving and destructuring the object  */}
              {/* the above is the conflict driven ui , we are dynamically chaning the data  */}

              {/* here we are iterating over the array of obj. where restaurant is the variable to iterate and we are rendering RestaurantCard react component each time And
              we are passing the restData as a parametre where it will be received inside the props at RestaurantCard component  */}
              {/* I want to take all the elements at once not one by one so we are using the map funciton which will help us 
              to reduce the code , these two lines are very powerful now we no longer needed to look after how many obj are there map will take care of it  */}
              
              {/* <ResturantCard   // I am not able to see the 2nd resturnt card option 
                 resName="KFC"  // here we are manually putting the parameters, comment is done by cntrl slash 
                cuisine="Burger, french fries, chiken wings"/>  */}
               {/* I was getting the error bcz I am not passing the data the second cart that i had created hence after commenting it out code is sucessfully running   */}
              
           </div>
        </div>
    ) 
    /*I didnt get resName is a variable used to get the values and place the values for the rest card. and doing it for all of container
     2] if any new resturant is need to open whan how it will addded to it ? */
}
/* when we need to reuse a particular funcationality than create a component and use it again n again */
/* Now we are passing the props to the functional component[which is nothing but js function] -->{similar to passing arguments to the function } , this is used for making things dynamic like passing the props
to component , so that we can use the same cart again and again just by changing the values by passing props  */ 

// we have coppied this data from App.js
export default Body;