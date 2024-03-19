import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart=()=>{
    const cartItem=useSelector((store)=>store.cart.items);
    const [isClicked,setIsClicked]=useState(false);
    
    const dispatch=useDispatch();
    const clearItem=()=>{
        dispatch(clearCart())
        setIsClicked(true);
       
    }
    return(
        <div className="text-center text-2xl m-4 p-4 ">
            <h1 className="font-bold text-3xl">Cart</h1>
            <button className="bg-black text-white p-4 w-30 h-13 mt-2"onClick={()=>clearItem()
             
            }
            >
            ClearCart</button>
            {isClicked && <h1>There is no more items</h1>}
            <div className=" m-auto w-6/12">    
                <ItemList items={cartItem}/>
                </div>
        </div>
    )
}
export default Cart;