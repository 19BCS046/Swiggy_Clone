import { Contact } from "../Contact";
import { render, screen } from "@testing-library/react";
import"@testing-library/jest-dom";
describe("It is Contact Page",()=>{
    it("Contact Page is loaded or not",()=>{
        render(<Contact />);
        const heading =screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        })
        it("button is working or not",()=>{
            render(<Contact />)
            const button=screen.getByRole("button");
            //Assertion
            expect(button).toBeInTheDocument();
        })
        it("test multiple input",()=>{
            render(<Contact />);
            //Querying
            const inputBoxes = screen.getAllByRole("textbox");
            console.log(inputBoxes);
            //Assertion
            expect(inputBoxes.length).toBe(2);
        
        })
})
