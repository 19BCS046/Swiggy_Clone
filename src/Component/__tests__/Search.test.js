import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockResListData from "../Mockdata/mockResListData.json";

import { Body } from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(mockResListData);
        }
    })

})

// it("Should render the Search Component",async ()=>{
//      await act(async ()=>
//      render(
//         <BrowserRouter>
//      <Body />
//      </BrowserRouter>));
//      const searchBeforeLength=screen.getAllByTestId("restcart");
//      expect(searchBeforeLength.length).toBe(9);
//      const searchBtn=screen.getByRole("button",{name:"search"});
//      expect(searchBtn).toBeInTheDocument();
//      const searchInput=screen.getByTestId("searchInput");
//      fireEvent.change(searchInput,{target:{value:"hotel"}})
//      fireEvent.click(searchBtn);
//      const searchAfterLength=screen.getAllByTestId("restcart");
//      expect(searchAfterLength.length).toBe(3)
// })

it("Should render the Top Rated Restaurant",async ()=>{
    await act(async ()=>
        render(
            <BrowserRouter>
        <Body />
        </BrowserRouter>
        ));
        const BeforeLength=screen.getAllByTestId("restcart");
        expect(BeforeLength.length).toBe(9);
        const topRatedBtn=screen.getByRole("button",{name:"TopRestaraunt"})
        // expect(topRatedBtn).toBeInTheDocument();
        fireEvent.click(topRatedBtn);
        const topRatedBtnAfter=screen.getAllByTestId("restcart");
        console.log(topRatedBtnAfter);
        expect(topRatedBtnAfter.length).toBe(1);
        
        
})
