import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { waitFor,render , screen} from "@testing-library/react";
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

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Checkout/i)


})



test("shows success message on submit with form details",async () => {

    render (<CheckoutForm/>)
    const firstName = screen.getByLabelText(/First Name:/i)
    userEvent.type(firstName,'ehsan')

    const lastName = screen.getByLabelText(/Last Name:/i)
    userEvent.type(lastName,'rahimi')


    const address = screen.getByLabelText(/Address:/i)
    userEvent.type(address,'myAddress')


    const city = screen.getByLabelText(/City:/i)
    userEvent.type(city,'fullerton')


    const state = screen.getByLabelText(/State:/i)
    userEvent.type(state,'ca')


    const zip = screen.getByLabelText(/zip:/i)
    userEvent.type(zip,'92831')

   
    const button = screen.getByRole('button')
    userEvent.click(button)

    await waitFor (() => {
        const firstNamefeedback = screen.queryByText(/ehsan/i)
        const lastNamefeedback = screen.queryByText(/rahimi/i)
        const Addressfeedback = screen.queryByText(/myAddress/i)
        const cityfeedback = screen.queryByText(/fullerton/i)
        const statefeedback = screen.queryByText(/ca/i)
        const zipCodefeedback = screen.queryByText(/92831/i)

        

        const successMessage = screen.queryAllByTestId('successMessage')

        const order = screen.queryByText(/Your new green friends will be shipped to:/i)

        expect(order).toBeInTheDocument
        expect(firstNamefeedback).toBeInTheDocument
        expect(lastNamefeedback).toBeInTheDocument
        expect(Addressfeedback).toBeInTheDocument
        expect(cityfeedback).toBeInTheDocument
        expect(statefeedback).toBeInTheDocument
        expect(zipCodefeedback).toBeInTheDocument

    })
    


});
