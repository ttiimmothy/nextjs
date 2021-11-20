import React from "react";
import {render,screen} from "@testing-library/react";
import {CategoryComponentHeader} from "./CategoryComponentHeader";

test("renders learn react link",() => {
	render(<CategoryComponentHeader header=""/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})