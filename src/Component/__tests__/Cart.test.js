import { act } from "react-dom/test-utils";
import { screen, fireEvent,render } from "@testing-library/react";
import { RestaurantMenu } from "../RestaurantMenu";
import { Header } from "../Header";
import Cart from "../Cart";
import cartMockData from "../Mockdata/cartMockData.json";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>
     Promise.resolve({
        json :() =>  Promise.resolve(cartMockData),
    }
    )
)

it("Should Render the Cart Component",async ()=>{
    await act( async ()=>
    render(
       <BrowserRouter>
        <Provider store={appStore}>
             <Header /> 
    <RestaurantMenu />
    <Cart />
    </Provider>
    </BrowserRouter>
    ) )
    const accordionBtn=screen.getByText("Noodles9")
    fireEvent.click(accordionBtn);
    expect(screen.getAllByTestId("cart1").length).toBe(9);
    const addBtn=screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addBtn[0]);
    expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("cart1").length).toBe(10);
    fireEvent.click(screen.getByRole("button",{name: "ClearCart"}));
    expect(screen.getByText("There is no more items")).toBeInTheDocument();


})