import React from "react";
import {render,screen} from "@testing-library/react";
import {WideCategoryVideoBlock} from "./WideCategoryVideoBlock";
import {video} from "../VideoBlock/VideoBlock.spec";

test("renders learn react link",() => {
	render(<WideCategoryVideoBlock video={video}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})