import React from "react";
import {render,screen} from "@testing-library/react";
import {video} from "../VideoBlock/VideoBlock.spec";
import {VideoPageListBlock} from "./VideoPageListBlock";

test("renders learn react link",() => {
	render(<VideoPageListBlock video={video}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})