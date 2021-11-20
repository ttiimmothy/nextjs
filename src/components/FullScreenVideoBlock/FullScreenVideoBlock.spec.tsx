import React from "react";
import {render,screen} from "@testing-library/react";
import {video} from "../VideoBlock/VideoBlock.spec";
import {FullScreenVideoBlock} from "./FullScreenVideoBlock";

test("renders learn react link",() => {
	render(<FullScreenVideoBlock video={video}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})