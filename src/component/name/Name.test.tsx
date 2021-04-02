import {render, screen} from "@testing-library/react"
import Name from "./Name";
import React from "react";


describe("the name input form", () => {

    const label = "Name"
    const noErrors = {}
    const errors = {name: {message: "An error occurred"}}
    const register = () => {
    }

    it('should show the label', () => {
        render(<Name label={label} register={register} errors={noErrors}/>)

        const labels = screen.getAllByText(label)
        labels.map(label => expect(label).toBeInTheDocument())
    })

    it('should show an error', () => {
        render(<Name label={label} register={register} errors={errors}/>)

        const errorMessages = screen.getAllByText(errors.name.message)
        errorMessages.map(errorMessage => expect(errorMessage).toBeInTheDocument())
    })
})

