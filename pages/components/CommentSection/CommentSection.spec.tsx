import React from "react";
import {render,screen} from "@testing-library/react";
import {CommentSection} from "./CommentSection";

test("renders learn react link",() => {
	render(<CommentSection/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})