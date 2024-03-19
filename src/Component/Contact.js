export const Contact =()=>{
return(
    <div className="content-center grid h-170 place-items-center">
        <h1 className="text-4xl text-black m-3">Contact Page</h1>
        <div className="flex flex-row content-center">
    <form className="flex flex-col">
        <input className="border border-black p-4 m-4  text-black text-lg" placeholder="Name" type="text"></input>
        <input className="border border-black p-4 m-4  text-black text-lg" placeholder="E-mail" type="email"></input>
        <input className="border border-black p-4 m-4  text-black text-lg" placeholder="Phone Number" type="number"></input>
        <button className="border border-black p-4 m-4 bg-slate-300 rounded-lg" type="submit">Submit</button>
    </form>
    </div>
    </div>
    
)
}





///  Class Component  ///


// import React, { Component } from 'react';
// import {About} from "./About";
// export class ContactClass extends Component{
//     constructor(props){
//         super(props);
//         console.log("parent constructor");
//         this.state={
//             userInfo:{
//             login:"19b",
//             id:1234,
//             name:"pppp"
//             },   
//         }
   
//     }
   
//     const {count}=useState(0);
//     async   componentDidMount(){
//         const data=await fetch("https://api.github.com/users/19BCS046");
//         const json = await data.json();
//         console.log("parent mount");
//         this.setState({
//             userInfo:json,
//    }); 
//            console.log(json);
//           this.interval=setInterval(() => {
//            console.log("Interval");
//        }, 1000);
//     }
   
//     componentDidUpdate(){
//         console.log("component update");
//     }
//     componentWillUnmount(){
//         clearInterval(this.interval);
//         console.log("contact page will disappear");
//     }

    
//     render(){
//         const {login,id,name}=this.state.userInfo;                     ;
//         // const {name,number}=this.props;
//         console.log("parent render");   
//         return(
//             <div className="user">
//             <h1>{login}</h1>
//             <h2>{id}</h2>
//             <h2>{name}</h2>
            
//                 {/* <h1>{name}</h1>
//                 <h2>{number}</h2> */}
//                 {/* <About name1={"First child"} num1={1}/> */}
//             </div>
//         );

//         }
        
//     }
