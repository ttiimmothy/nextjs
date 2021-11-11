import React from "react";
import {render,screen} from "@testing-library/react";
import {video} from "../VideoBlock/VideoBlock.spec";
import {HomeFullScreenVideoBlock} from "./HomeFullScreenVideoBlock";

test("renders learn react link",() => {
	render(<HomeFullScreenVideoBlock video={video}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})