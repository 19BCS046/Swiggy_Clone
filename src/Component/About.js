// import {Component} from "react";
// import userContext from "../../utils/userContext";
// export class About extends Component{
//     constructor(props){
//         super(props);
//         console.log(this.props.name1+"child constructor");
//     }
//     componentDidMount(){
//         console.log(this.props.name1+"child mount");
//     }
//     render(){
//         const {name1,num1}=this.props;
//         console.log("child render");
//         return(
//             <div className="about">
//                 <h3>Hi About Page</h3>
//                 <h1>{name1}</h1>
//                 <h2>{num1}</h2>
//                 <div>
//                     <userContext.Consumer>
//                         {({loggedInUser})=>(
//                             <h2 className="font-bold">{loggedInUser}</h2>
//                         )}
//                     </userContext.Consumer>
//                 </div>

import { About1, About2 } from "../../utils/url"

                
            
//             </div>
          
//         )
//     }
// }


export const About=()=>{
    return(
        <>
        <div className="w-11/12 ">
        <div className="flex flex-row gap-8 align-middle  pl-10 mb-10 mt-10 ml-20" >
        <div className="basis-1/2 py-12">
            <h1 className="font-bold text-5xl mb-7">Swiggy Clone - Make Your Food Business Automatic</h1>
            <h3 className="text-lg from-neutral-100">Allow Faster Restaurant Access and 24×7 Food Delivery Support with Swiggy Clone to Introduce Efficiency in Your Business.</h3>
            <button className=" border-4  rounded-lg text-2xl p-5 bg-orange-500 mt-10">Enjoy Your Day</button>
        </div>
        <div className="basis-1/2 py-12">
            <img className="h-auto max-w-full" src={About1}></img>
        </div>
        </div>
        <div className="flex flex-row gap-8 ml-20">
        <div className="basis-1/2">
        <img className="h-auto max-w-full" src={About2}></img>
        </div>
        <div className="basis-1/2 p-10">
            <h1 className="font-bold text-5xl mb-7 ">What is Swiggy Clone? How Does it Help Food Vendors to Boost Delivery Business</h1>
            <h3 className="text-lg from-neutral-100">Swiggy clone is an online ordering and delivery solution which enables customers to choose and order from their preferred food stores. The platform enhances the overall business performance, reducing manual labor and automating the many operations.
Elluminati offers a complete solution that offers them opportunities to store business expansion and easy access to business processes. Apps like Swiggy have various modules that perform specific tasks. To meet the proliferation in online services, food vendors have joined hands and started acquiring the platform to take up orders and fulfill doorstep deliveries using the app.</h3>
        </div>
       
        </div>
        </div>
        </>
    )

}