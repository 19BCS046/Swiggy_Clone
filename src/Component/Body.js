import { RestCart,withPromotedLabel } from "./RestCart";
import { resObj } from "../../utils/cart";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../../utils/userContext";

const linkStyle={
    textDecoration: 'none',
    color:'black'
  }
export const Body=()=>{
    const [ListOfRestaraunt,setListOfRestaraunt]=useState([]);
    const [filteredList,setfilteredList]=useState([]);
    const [searchTxt,setsearchTxt]=useState("");
    
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.664325&lng=78.1460142&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("Perumal");
          console.log(json);
    setListOfRestaraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return( 
        <h1 className="text-4xl font-bold text-center mt-6 text-red-600">Check your Internet Connection</h1>
         );
        }
    if(ListOfRestaraunt?.length === 0){
        return <Shimmer/>;
    }
    const RestaurantPromoted=withPromotedLabel(RestCart);
    const {loggedInUser,setUserName}=useContext(userContext);
    
    return(
            <div className="body">
               <div className='topres'>
                <div className="flex">
               <div className="search">
                <input type="text"  data-testid="searchInput" className="p-2 m-3 border border-black border-solid rounded-lg" value={searchTxt} onChange={(e)=>{setsearchTxt(e.target.value)}}></input>
                <button className="p-2  m-3  bg-slate-200 rounded-lg" onClick={()=>{
                    console.log(searchTxt);
                    const filteredName=ListOfRestaraunt.filter((res)=>res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                    setfilteredList(filteredName);
                }}>search</button>
               </div>
                <button className="p-2 m-3 w-34 border border-black bg-red-300 rounded-lg"  onClick={()=>{
                    const filtered=ListOfRestaraunt.filter((res)=>res.info.avgRating>4.4);
                    setfilteredList(filtered);
                                   }}>TopRestaraunt</button>      
                                    <div>
                                        <label>UserName</label>
                    <input className="p-2 m-3 w-34 border border-black rounded-lg" 
                     value={loggedInUser} 
                     onChange={(e)=>{setUserName(e.target.value)}}/>
                </div>          
                </div> 
               
                </div>
                <div className='flex flex-wrap text-black font-semibold rounded-lg'>
                  {filteredList.map((rest)=>(
                    <div data-testid="restcart2">
                  <Link style={linkStyle} key={rest.info.id} to={"/restaurant/"+rest.info.id} data-testid="restcart"> 
                  {
                  rest.info.veg?<RestaurantPromoted resData={rest}/>:<RestCart  resData={rest}/>            
                 }
                  </Link>
                  </div>
                ))}        
            </div>

            </div>
    )
}