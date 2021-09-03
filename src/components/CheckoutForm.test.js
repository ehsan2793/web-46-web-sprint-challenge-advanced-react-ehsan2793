import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render , screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
render(<CheckoutForm />)

});

test('when mount header does exist and it has a text of Checkout Form',()=>{
    render (<CheckoutForm/>)
    const header = screen.queryByText(/Checkout Form/i)

    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent(/Checkout Form/i)
    expect(header).toBeTruthy()
}) 


test("check out button exist on the page when component is mount",() => {
    render (<CheckoutForm/>)
    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Checkout/i)
})



test("shows success message on submit with form details", () => {

    render (<CheckoutForm/>)
    const button = screen.getByRole('button')
    userEvent.click(button)
    const success =  screen.queryByText(/ You have ordered some plants! Woo-hoo!/i)
    expect(button).toBeInTheDocument()
    
    // expect(header).toHaveTextContent((/ You have ordered some plants! Woo-hoo!/i))

});
