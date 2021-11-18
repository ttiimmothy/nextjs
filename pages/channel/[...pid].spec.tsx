import React from "react";
import {render,screen} from "@testing-library/react";
import SubCategory from "./[...pid]";

test("renders learn react link", () => {
	render(<SubCategory/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})