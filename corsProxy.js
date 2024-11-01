
  
// // //   // File: corsProxy.js
// // //   const express = require('express');
// // //   const { createProxyMiddleware } = require('http-proxy-middleware');
  
// // //   const app = express();
  
// // //   app.use('/', createProxyMiddleware({
// // //     target: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&collection=80373&tags=layout_CCS_Poha&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
// // // , // Replace with your API's base URL
// // //     changeOrigin: true,
// // //     onProxyRes: function (proxyRes, req, res) {
// // //       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
// // //     }
// // //   }));
  
// // //   const port = 3001;
// // //   app.listen(port, () => {
// // //     console.log(`CORS Proxy running on http://localhost:${port}`);
// // //   });
  
// // //   // File: src/api.js
// // //   const API_BASE_URL = process.env.NODE_ENV === 'development' 
// // // ? 'http://localhost:3001' 
// // //     : 'https://api.example.com';
  
// // //   export const fetchData = async () => {
// // //     const response = await fetch(`${API_BASE_URL}/your-endpoint`);
// // //     return response.json();
// // //   };
  
// // //   // File: src/App.js
// // //   import React, { useEffect, useState } from 'react';
// // //   import { fetchData } from './api';
  
// // //   function App() {
// // //     const [data, setData] = useState(null);
  
// // //     useEffect(() => {
// // //       fetchData().then(setData);
// // //     }, []);
  
// // //     return (
// // //       <div>
// // //         <h1>My React App</h1>
// // //         {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
// // //       </div>
// // //     );
// // //   }
  
// // //   export default App;

// // const express = require('express');
// // const { createProxyMiddleware } = require('http-proxy-middleware');

// // const app = express();

// // app.use('/', createProxyMiddleware({
// //   target: 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&collection=80373&tags=layout_CCS_Poha&sortBy=&filters=&type=rcv2&offset=0&page_type=null', // Replace with your API's base URL
// //   changeOrigin: true,
// //   onProxyRes: function (proxyRes, req, res) {
// //     proxyRes.headers['Access-Control-Allow-Origin'] = '*';
// //     // Add cache-busting headers
// //     proxyRes.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
// //     proxyRes.headers['Pragma'] = 'no-cache';
// //     proxyRes.headers['Expires'] = '0';
// //   }
// // }));

// // const port = 3001;
// // app.listen(port, () => {
// //   console.log(`CORS Proxy running on http://localhost:${port}`);
// // });

// // const express = require('express');
// // const { createProxyMiddleware } = require('http-proxy-middleware');

// // const app = express();

// // // Define the proxy middleware
// // const apiProxy = createProxyMiddleware({
// //   target: 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&collection=80373&tags=layout_CCS_Poha&sortBy=&filters=&type=rcv2&offset=0&page_type=null', // Replace with your API's base URL
// //   changeOrigin: true,
// //   onProxyRes: function (proxyRes, req, res) {
// //     // Set CORS headers
// //     proxyRes.headers['Access-Control-Allow-Origin'] = '*';
// //     // Add cache-busting headers
// //     proxyRes.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
// //     proxyRes.headers['Pragma'] = 'no-cache';
// //     proxyRes.headers['Expires'] = '0';
// //   }
// // });

// // Use the proxy middleware for all routes
// // app.use('/', apiProxy);

// // Set the port
// // const PORT = process.env.PORT || 3001;

// // // Start the server
// // app.listen(PORT, () => {
// //   console.log(`CORS Proxy server is running on port ${PORT}`);
// // });

// // // Handle termination signals
// // process.on('SIGINT', () => {
// //   console.log('CORS Proxy server is shutting down');
// //   process.exit();
// // });

// // const express = require('express');
// // const { createProxyMiddleware } = require('http-proxy-middleware');

// // const app = express();

// // // Swiggy API proxy middleware
// // const swiggyApiProxy = createProxyMiddleware({
// //   target: 'https://www.swiggy.com',
// //   changeOrigin: true,
// //   pathRewrite: {
// //     '^/swiggy-api': '', // Remove the '/swiggy-api' prefix when forwarding the request
// //   },
// //   onProxyRes: function (proxyRes, req, res) {
// //     proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:1234';
// //     proxyRes.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS';
// //     proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
// //   }
// // });

// // // Use the Swiggy API proxy for routes starting with '/swiggy-api'
// // app.use('/swiggy-api', swiggyApiProxy);

// // // Handle preflight requests
// // app.options('/swiggy-api/*', (req, res) => {
// //   res.header('Access-Control-Allow-Origin', 'http://localhost:1234');
// //   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
// //   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// //   res.sendStatus(200);
// // });

// // const PORT = process.env.PORT || 3001;

// // app.listen(PORT, () => {
// //   console.log(`CORS Proxy server is running on port ${PORT}`);
// // });

// // process.on('SIGINT', () => {
// //   console.log('CORS Proxy server is shutting down');
// //   process.exit();
// // });

// // const express = require('express');


// // const app = express();

// // // Enable CORS for all routes
// // app.use(cors());

// // // Proxy endpoint
// // app.use('/api', async (req, res) => {
// //   const targetUrl = `https://www.swiggy.com${req.url}`;
  
// //   try {
// //     const response = await axios({
// //       method: req.method,
// //       url: targetUrl,
// //       headers: {
// //         ...req.headers,
// //         host: 'www.swiggy.com',
// //       },
// //       data: req.body,
// //     });

// //     // Forward the response from Swiggy API to the client
// //     res.status(response.status).json(response.data);
// //   } catch (error) {
// //     console.error('Error proxying request:', error.message);
// //     res.status(500).json({ error: 'An error occurred while proxying the request' });
// //   }
// // });

// // const PORT = process.env.PORT || 3001;

// // app.listen(PORT, () => {
// //   console.log(`Proxy server is running on http://localhost:${1234}`);
// // });
// // const express = require('express');
// // const cors = require('cors');
// // const axios = require('axios');

// // const app = express();

// // // Enable CORS for all routes
// // app.use(cors(https://dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&collection=80373&tags=layout_CCS_Poha&sortBy=&filters=&type=rcv2&offset=0&page_type=null));

// // // Proxy endpoint
// // app.use('/api', async (req, res) => {
// //   const targetUrl = `https://www.swiggy.com${req.url}`;
  
// //   try {
// //     const response = await axios({
// //       method: req.method,
// //       url: targetUrl,
// //       headers: {
// //         ...req.headers,
// //         host: 'www.swiggy.com',
// //       },
// //       data: req.body,
// //     });

// //     // Forward the response from Swiggy API to the client
// //     res.status(response.status).json(response.data);
// //   } catch (error) {
// //     console.error('Error proxying request:', error.message);
// //     res.status(500).json({ error: 'An error occurred while proxying the request' });
// //   }
// // });

// // const PORT = process.env.PORT || 3001;

// // app.listen(PORT, () => {
// //   console.log(`Proxy server is running on http://localhost:${PORT}`);
// // });

// // const express = require('express');
// // const cors = require('cors');
// // const axios = require('axios');

// // const app = express();

// // // Configure CORS
// // const corsOptions = {
// //   origin: 'http://localhost:1234', // Replace with your frontend's URL
// //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization']
// // };

// // // Enable CORS with the specified options
// // app.use(cors(corsOptions));

// // // Proxy endpoint
// // app.use('/api', async (req, res) => {
// //   const targetUrl = `https://www.swiggy.com${req.url}`;
  
// //   try {
// //     const response = await axios({
// //       method: req.method,
// //       url: targetUrl,
// //       headers: {
// //         ...req.headers,
// //         host: 'www.swiggy.com',
// //       },
// //       data: req.body,
// //     });

// //     // Forward the response from Swiggy API to the client
// //     res.status(response.status).json(response.data);
// //   } catch (error) {
// //     console.error('Error proxying request:', error.message);
// //     res.status(500).json({ error: 'An error occurred while proxying the request' });
// //   }
// // });

// // const PORT = process.env.PORT || 3001;

// // app.listen(PORT, () => {
// //   console.log(`Proxy server is running on http://localhost:${PORT}`);
// // });

// const express = require('express');
// const cors = require('cors');  // Make sure this line is present
// const axios = require('axios');

// const app = express();
// app.use(express.json())
// // Use cors middleware
// const corsOptions = {
//   // origin: `${process.env.WEBSITE}`,
//   origin: `http://localhost:1234/`,
//   credentials:true
// };
// app.use(cors(corsOptions))

// app.get("/",(req,res)=>{
//   console.log(req);
  
//   res.send("sever is working")
//   })
  
// // Proxy endpoint
// app.use('/api', async (req, res) => {
//   const targetUrl = `https://www.swiggy.com${req.url}`;
  
//   try {
//     const response = await axios({
//       method: req.method,
//       url: targetUrl,
//       headers: {
//         ...req.headers,
//         host: 'www.swiggy.com',
//       },
//       data: req.body,
//     });

//     // Forward the response from Swiggy API to the client
//     res.status(response.status).json(response.data);
//   } catch (error) {
//     console.error('Error proxying request:', error.message);
//     res.status(500).json({ error: 'An error occurred while proxying the request' });
//   }
// });

// const PORT = process.env.PORT || 3001;


// app.listen(PORT, () => {
//   console.log(`Proxy server is running on http://localhost:${PORT}`);
// });