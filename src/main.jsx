import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {DataProvider} from "./context/DataContext.jsx";

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import About from './About.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>
//   },
//   {
//     path: "/about",
//     element: <About/>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
)
