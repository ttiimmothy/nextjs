import React from "react";
import {render,screen} from "@testing-library/react";
import PageHeaderLikeButtonWithEmojiBox from "./PageHeaderLikeButtonWithEmojiBox";

test("renders learn react link",() => {
	render(<PageHeaderLikeButtonWithEmojiBox/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})