import React from "react";
import {render,screen} from "@testing-library/react";
import {CommentsBlock} from "./CommentsBlock";

test("renders learn react link",() => {
	render(<CommentsBlock responseNumber={0}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})