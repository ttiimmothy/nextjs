import React from "react";
import {render,screen} from "@testing-library/react";
import {FooterInHeader} from "./FooterInHeader";

test("renders learn react link",() => {
	render(<FooterInHeader/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})