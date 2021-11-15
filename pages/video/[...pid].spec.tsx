import React from "react";
import {render,screen} from "@testing-library/react";
import Video from "./[...pid]";

test("renders learn react link", () => {
	render(<Video/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})