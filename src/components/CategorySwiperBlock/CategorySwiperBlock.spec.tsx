import React from "react";
import {render,screen} from "@testing-library/react";
import {video} from "../VideoBlock/VideoBlock.spec";
import {CategorySwiperBlock} from "./CategorySwiperBlock";

test("renders learn react link",() => {
	render(<CategorySwiperBlock video={video}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})