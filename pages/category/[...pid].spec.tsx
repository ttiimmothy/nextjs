import React from "react";
import {render,screen} from "@testing-library/react";
import Category from "./[...pid]";

test("renders learn react link", () => {
	render(<Category/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})