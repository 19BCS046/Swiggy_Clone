import { fireEvent, render,screen } from "@testing-library/react"
import { Header } from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import "@testing-library/jest-dom";
it("Header Should the render the Button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>  
    )
    const loginButton=screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
})
it("Header Should the render the  Button into  logout",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>  
    )
    const loginbutton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginbutton);
    const logout=screen.getByRole("button",{name:"Logout"});
    expect(logout).toBeInTheDocument();
})
it("Header Should the render the cart",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>  
    )
    const cart=screen.getByText("Cart-(0 items)");
    expect(cart).toBeInTheDocument();
})
