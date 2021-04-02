import React from "react";
import {render, screen} from '@testing-library/react';
import App from './App';

describe("the app component", () => {
    it("renders a submit button", () => {
        render(<App/>)
        const buttonElements = screen.getAllByRole("button", {type: "submit"})
        buttonElements.map(buttonElement => expect(buttonElement).toBeInTheDocument())
    })
})

