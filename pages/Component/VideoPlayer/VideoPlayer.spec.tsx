import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import {VideoPlayer} from "./VideoPlayer";

test("renders learn react link",() => {
	render(<VideoPlayer/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})