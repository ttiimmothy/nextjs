import React from "react";
import {render,screen} from "@testing-library/react";
import MoreOptionsButtonWithMoreBox from "./MoreOptionsButtonWithMoreBox";

test("renders learn react link",() => {
	render(<MoreOptionsButtonWithMoreBox/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})