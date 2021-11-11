import React from "react";
import {render,screen} from "@testing-library/react";
import ShareButtonWithShareBox from "./ShareButtonWithShareBox";

test("renders learn react link",() => {
	render(<ShareButtonWithShareBox/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})