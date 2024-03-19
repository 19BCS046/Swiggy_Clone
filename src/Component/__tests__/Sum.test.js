import { Sum } from "../Sum";
test("Sum of the two  number",()=>{
    const result=Sum(2,4);
    //Assertion
    expect(result).toBe(6);
})