import React from "react";
import {render,screen} from "@testing-library/react";
import {ResponsesBlock} from "./ResponsesBlock";

test("renders learn react link",() => {
	render(<ResponsesBlock/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})