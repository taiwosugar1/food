import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import User from "./components/User";
import './App.css';
import {  createBrowserRouter, Outlet, RouterProvider  } from "react-router-dom";
import Food from "./pages/Food";
import Header from "./pages/Header";
import NewFood from "./pages/NewFood";
import FoodList from "./pages/FoodList";


function App() {
  const Layout = () =>{
    return(
          <div>
             <Navbar/>
             <Header/>
        
               <div style={{display: "flex"}}>
            
               <div style={{flex: 2}}>
                <Recipe/>
                 </div>

                <div style={{flex: 8}}>
                <Outlet/>
                 </div>
        
      </div>
    </div>
              
      )
    };

    const router = createBrowserRouter([
      {
        path: "/",
        element:<Layout/>,
        children:[
          {
          path:"/",
          element: <Home/>
        },
   
    ]
      },
      {
        path: '/signin',
        element: <Signin/>
      },
    {
      path: '/signup',
      element: <Signup/>
    },
   
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/user',
      element: <User/>
    },
    {
      path:"/food/:Id",
      element: <Food/>
    },
    {
      path:"/food",
      element: <FoodList/>
    },
    {
      path:"/food/new",
      element: <NewFood/>
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
