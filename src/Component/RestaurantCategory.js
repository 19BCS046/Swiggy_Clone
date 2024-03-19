import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory =({data,showItems,setShowIndex})=>{
    // const [showItems,setShowItems]=useState(false);
    const handleclick=()=>{
        // setShowItems(!showItems);
        setShowIndex();
    }
    return (
        <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4  ">
            <div className=" flex justify-between cursor-pointer" 
            onClick={handleclick}>
            <span className="font-bold">{data.title}{(data.itemCards.length)}</span>
            <span>⬇️</span>
            </div>
          { showItems && <ItemList items={data.itemCards}/>}
      
        </div>
    )
}
export default RestaurantCategory;