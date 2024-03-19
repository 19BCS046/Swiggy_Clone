import { useEffect, useState } from "react";
import { MenuImg } from "./url";

export  const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async ()=>{
          const data=await fetch(MenuImg+resId);
          const json=await data.json();
        //   console.log(json);
          setResInfo(json);

    }
return resInfo;
};