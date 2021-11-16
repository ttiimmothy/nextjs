import React from "react";
import {render,screen} from "@testing-library/react";
import {CategoryVideoBlock} from "./CategoryVideoBlock";
import {video} from "../VideoBlock/VideoBlock.spec";

test("renders learn react link",() => {
	render(<CategoryVideoBlock video={video}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})