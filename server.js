// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Use CORS middleware to handle CORS requests from the frontend
// app.use(cors());
// app.use(express.json());

// // Route to handle the request from the frontend
// app.post('/fetch-restaurants', async (req, res) => {
//   try {
//     const { lat, lng, collection, tags, sortBy, filters, type, offset, page_type } = req.body;

//     // Construct the API URL using the received parameters
//     const swiggyUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&collection=${collection}&tags=${tags}&sortBy=${sortBy}&filters=${filters}&type=${type}&offset=${offset}&page_type=${page_type}`;

//     // Define headers to avoid 403 errors
//     const headers = {
//       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36',
//       'Referer': 'https://www.swiggy.com/',
//       'Accept': 'application/json, text/plain, */*',
//       'Accept-Language': 'en-US,en;q=0.9',
//       'Content-Type': 'application/json',
//     };

//     // Fetch data from the Swiggy API using axios with headers
//     const response = await axios.get(swiggyUrl, { headers });

//     // Send the response data back to the frontend
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     res.status(500).json({ error: 'Unable to fetch data from Swiggy' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// --------------------------------------------------------------------------------------------------------------------

// const express = require('express');  // Import Express.js framework
// const axios = require('axios');      // Import Axios for making HTTP requests
// const cors = require('cors');        // Import CORS middleware
// require('dotenv').config();          // Load environment variables from .env file

// const app = express();  // Create an Express application
// const PORT = process.env.PORT || 3000;  // Set the port for the server

// app.use(cors());  // Enable CORS for all routes

// // Define a route for /api/restaurants
// app.get('/api/restaurants', async (req, res) => {
//   try {
//     const { lat, lng } = req.query;  // Extract latitude and longitude from query parameters
    
//     // Make a request to Swiggy's API
//     const response = await axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5`, {
//       params: {  // Set query parameters
//         lat,
//         lng,
//         page_type: 'DESKTOP_WEB_LISTING'
//       },
//       headers: {  // Set headers to mimic a browser request
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//         'Accept': 'application/json, text/plain, */*',
//         'Referer': 'https://www.swiggy.com/',
//         'Origin': 'https://www.swiggy.com'
//       }
//     });
    
//     res.json(response.data);  // Send Swiggy's response back to the client
//   } catch (error) {
//     console.error('Error fetching data from Swiggy:', error.message);
//     res.status(500).json({ error: 'An error occurred while fetching data from Swiggy' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// -------------------------------------------------------------------------------------------------------------------------------------

const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Existing route for restaurant list
app.get('/api/restaurants', async (req, res) => {
  try {
    const { lat, lng } = req.query;
    const response = await axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5`, {
      params: { lat, lng, page_type: 'DESKTOP_WEB_LISTING' },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://www.swiggy.com/',
        'Origin': 'https://www.swiggy.com'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Swiggy:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching data from Swiggy' });
  }
});

// New route for menu data
app.get('/api/menu', async (req, res) => {
  try {
    const { lat, lng, restaurantId, query } = req.query;
    const response = await axios.get(`https://www.swiggy.com/dapi/menu/pl`, {
      params: {
        'page-type': 'REGULAR_MENU',
        'complete-menu': 'true',
        lat,
        lng,
        restaurantId,
        catalog_qa: 'undefined',
        query,
        submitAction: 'ENTER'
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://www.swiggy.com/',
        'Origin': 'https://www.swiggy.com'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching menu data from Swiggy:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching menu data from Swiggy' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});