import React from "react";
import {render,screen} from "@testing-library/react";
import {PageFooter} from "./PageFooter";

test("renders learn react link",() => {
	render(<PageFooter/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})