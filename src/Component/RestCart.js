import { RestImg } from "../../utils/url";
import { useContext } from "react";
import userContext from "../../utils/userContext";

export const RestCart=(props)=>{
  const{resData}=props;
  const {id,name,cuisines,costForTwo,sla,avgRating}=resData?.info;
  const {loggedInUser}=useContext(userContext);


  return(
  <div className='p-4 m-4 w-[300px] mb-10 h-[530px] rounded-lg' style={{backgroundColor:"#f0f0f0"}}>
      <img className=" w-[300px] h-52 mb-4 rounded-lg" src={RestImg+resData.info.cloudinaryImageId}></img>
     
 {/* <h2 className="mb-4">{id}</h2> */}
  <h3 className="mb-4 text-2xl font-bold">{name}</h3>
  <h4 className="mb-4">{cuisines.join(",")}</h4>
  <h4 className="mb-4">{costForTwo}</h4>
  <h4 className="mb-4">⏰{sla?.slaString}</h4>
  <h4 className="mb-4">⭐{avgRating}</h4>
   {/* userContext */}
  <h4 className="mb-4">{loggedInUser}</h4>
  </div>
)}
 export const  withPromotedLabel=(RestCart)=>{
  return(props)=>{  
    return(
      <div>
        <label className="absolute bg-black text-white ml-4 mt-2 p-1 rounded-lg">Promoted</label>
        <RestCart {...props}/>

      </div>
    )
  }
}