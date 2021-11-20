import React from "react";
import {render,screen} from "@testing-library/react";
import {TypeHeader} from "./TypeHeader";

test("renders learn react link",() => {
	render(<TypeHeader/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})