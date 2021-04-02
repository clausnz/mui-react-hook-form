import {render, screen} from "@testing-library/react"
import Birthday from "./Birthday";
import React from "react";


describe("the birthday input selector form", () => {

    const label = "Birthday"
    const noErrors = {}
    const errors = {birthday: {message: "An error occurred"}}
    const register = () => {
    }
    const setValue = () => {
    }
    const resetManual = () => {
    }


    it('should show the label', () => {
        render(
            <Birthday
                label={label}
                register={register}
                errors={noErrors}
                setValue={setValue}
                resetManual={resetManual}
            />)

        const labels = screen.getAllByText(label)
        labels.map(label => expect(label).toBeInTheDocument())
    })

    it('should show an error', () => {
        render(
            <Birthday
                label={label}
                register={register}
                errors={errors}
                setValue={setValue}
                resetManual={resetManual}
            />)

        const errorMessages = screen.getAllByText(errors.birthday.message)
        errorMessages.map(errorMessage => expect(errorMessage).toBeInTheDocument())
    })
})

