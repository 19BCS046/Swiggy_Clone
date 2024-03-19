import { RestCart,withPromotedLabel } from "../RestCart";
import resMockData from "../Mockdata/resMockData.json";
import promoted from "../Mockdata/promoted.json";
import { screen,render } from "@testing-library/react";
import "@testing-library/jest-dom"

it("should render the Rest Cart",()=>{
    render(<RestCart  resData={resMockData} />)
   const name= screen.getByText("Pizza Hut");
   expect(name).toBeInTheDocument();
})
// it("should render the Promoted Rest Cart",()=>{
//     render(<withPromotedLabel =(RestCart) />)
//     const promote_name=screen.getByText("true",{veg: "true"});
//     expect(promote_name).toBeInTheDocument();

// })