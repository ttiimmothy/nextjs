import React from "react";
import {render,screen} from "@testing-library/react";
import PageHeaderShareButtonWithShareBox from "./PageHeaderShareButtonWithShareBox";

test("renders learn react link",() => {
	render(<PageHeaderShareButtonWithShareBox/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})