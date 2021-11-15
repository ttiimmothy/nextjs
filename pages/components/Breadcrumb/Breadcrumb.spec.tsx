import React from "react";
import {render,screen} from "@testing-library/react";
import {Breadcrumb} from "./Breadcrumb";

test("renders learn react link",() => {
	render(<Breadcrumb pid={[]} videos={[]} categories={[]} type=""/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})