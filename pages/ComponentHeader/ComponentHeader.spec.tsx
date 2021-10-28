import React from "react";
import {render,screen} from "@testing-library/react";
import {ComponentHeader} from "./ComponentHeader";

test("renders learn react link", () => {
	render(<ComponentHeader header=""/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})