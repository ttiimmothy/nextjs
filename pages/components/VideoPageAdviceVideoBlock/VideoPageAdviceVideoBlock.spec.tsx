import React from "react";
import {render,screen} from "@testing-library/react";
import {video} from "../VideoBlock/VideoBlock.spec";
import {VideoPageAdviceVideoBlock} from "./VideoPageAdviceVideoBlock";

test("renders learn react link",() => {
	render(<VideoPageAdviceVideoBlock video={video}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})