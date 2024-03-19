import React,{lazy,Suspense, useEffect}  from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Component/Header';
import { Body } from './Component/Body';
import './App.css';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import { About } from './Component/About';
import { Error } from './Component/Error';
// import { Contact } from './Component/Contact';
import { RestaurantMenu } from './Component/RestaurantMenu';
import { Contact } from './Component/Contact';
// import { Grocery } from './Component/Grocery';
// import Grocery from './Component/Grocery';
import { useState } from 'react';
import userContext from '../utils/userContext';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import Cart from './Component/Cart';
const Grocery=lazy(()=>import('./Component/Grocery'));

const AppLayout=()=>{
  const [userName,setUserName]=useState();
  useEffect(()=>{
   //api connection
   const data={
    name:"Perumal",
   };
   setUserName(data.name)
  },[])
    return (
      <Provider store={appStore}>
      <userContext.Provider value={{loggedInUser: userName,setUserName}}>
          <div className="app">
                  {/* <userContext.Provider value={{loggedInUser:"Swiggy"}}> */}
            <Header/>
            {/* </userContext.Provider> */}
            <Outlet /> 
    </div>
    </userContext.Provider>
    </Provider>
   

    )
}

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
    {
      path:"/",
      element:<Body />
    },
    {
      path:"/about",
      element: <About />,
    
    },
    {
      path:"/contact",
      element: <Contact />,
    },
    {
      path:"/restaurant/:resId",
      element:<RestaurantMenu />,
    },
    {
      path:"/cart",
      element:<Cart />,
    },
    {
      path:"/grocery",
      element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Grocery />
        </Suspense>
        ),
    
    }

  ],
    errorElement:<Error />,
  },
  
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter} />);



