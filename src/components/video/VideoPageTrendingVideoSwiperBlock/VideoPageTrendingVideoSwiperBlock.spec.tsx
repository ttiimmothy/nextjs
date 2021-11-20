import React from "react";
import {render,screen} from "@testing-library/react";
import {video} from "../../VideoBlock/VideoBlock.spec";
import {VideoPageTrendingVideoSwiperBlock} from "./VideoPageTrendingVideoSwiperBlock";

test("renders learn react link",() => {
	render(<VideoPageTrendingVideoSwiperBlock video={video}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})