import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";
import RestaurantCategory  from "./RestaurantCategory";
import { useState } from "react";


export const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    const [showIndex,setShowIndex]=useState(null);
   
    if(resInfo===null){
        return <Shimmer />
    }
    const {name,cloudinaryImageId,costForTwoMessage,cuisines,avgRating}=resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(1);
    console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(2);
    console.log(categories);
    return(
        <div className="text-center">    
            <h1 className="text-black font-bold text-2xl my-10">{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            {
                categories.map((category,index)=>(
                    // controlled component
                    <RestaurantCategory 
                    key={category?.card?.card?.itemCards?.card?.info?.id} 
                    data={category?.card?.card}
                     showItems={index===showIndex ?true:false}
                     setShowIndex={()=>setShowIndex(index)}
                      />
                    
                    
                    ))
               
            }
            {/* <h3> 
                <img className="rm1" src={RestImg2+cloudinaryImageId}></img>
            </h3> */}
            {/* <h3>{avgRating}</h3> */}
            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map(item=><li key={item.card.info.id}> {item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul> */}
        </div>
    )
}