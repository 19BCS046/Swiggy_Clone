import { Link } from "react-router-dom";
import { NavImg } from "../../utils/url";
import { useEffect, useState } from "react";
import { useOnlineStatus } from "../../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";
export const Header=()=>{
   const [btnLogs,setbtnLogs]=useState("Login");
   const {loggedInUser}=useContext(userContext);
   useEffect(()=>{
         console.log("Hi");
   },[btnLogs])
   const onlineStatus=useOnlineStatus();
   //subscribe for the store to cart item
   const cart=useSelector((store)=> store.cart.items)
   console.log(cart);
 
    return(
    <div className="flex justify-between bg-slate-600 shadow-lg m-2 sm:bg-white text-xl">
        <div className="logo">
            <img className="w-36" src={NavImg}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex  text-1xl gap-2 ml-0">
                <li className="px-2  ">
                    Internet Status :{onlineStatus == true?"✅✅":"🔴🔴"}
                </li>
                <li className="px-2 bg-sky-500 hover:bg-sky-700 rounded-lg text-center align-middle">
                <Link to="/"> Home </Link> 
                    </li>
            <li className="px-2 bg-sky-500 hover:bg-sky-700">
            <Link to="/about"> About us </Link> 
            </li>
                <li className="px-2 bg-sky-500 hover:bg-sky-700 rounded-lg">
                     <Link to="/contact"> Contact us  </Link> 
                    </li>
                    <li className="px-2 bg-sky-500 hover:bg-sky-700 rounded-lg">
                     <Link to="/grocery"> Grocery    </Link> 
                    </li>
                <li className="px-2 font-bold bg-sky-500 hover:bg-sky-700 rounded-lg">
                <Link to="/cart"> Cart-({cart.length} items)  </Link> 
                    
                    </li>
                <button className="btnlogs" onClick={()=>{
                    btnLogs==="Login"?setbtnLogs("Logout"):setbtnLogs("Login");
                }}>
                    {btnLogs}
                    </button>
                    {/* userContext */}
                    <li className="font-bold ml-1">{loggedInUser}</li>
            </ul>
        </div>

    </div>
    )
}