import { useDispatch } from "react-redux";
import { RestImg } from "../../utils/url";
import { addItem } from "../../utils/cartSlice";
const ItemList=({items})=>{
    console.log(items);
    const dispatch=useDispatch();
    const handleAnItem =(item)=>{
        dispatch(addItem(item));
    }
    return (
     <div>
            {
                items.map((item)=>(
                   <div  key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between ">
                    <div className="w-9/12" data-testid="cart1">
                    <div className="font-medium text-left py-2  ">
                        <span className="">{item.card.info.name} -₹  </span>
                        <span >{item.card.info.price/100||item.card.info.defaultPrice/100}</span>
                    </div>
                        <p className="text-xs text-left">{item.card.info.description}</p> 
                        </div>
                        <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="bg-black text-white  shadow-lg rounded-lg mx-3 p-1 text-sm" 
                            onClick={()=>handleAnItem(item)}
                            > Add +</button>
                            </div>
                        <img  className="w-full" src={RestImg+item.card.info.imageId}></img>
                        
                        </div>
                        </div>
                ))}
            </div>
    );
        };
export default ItemList;