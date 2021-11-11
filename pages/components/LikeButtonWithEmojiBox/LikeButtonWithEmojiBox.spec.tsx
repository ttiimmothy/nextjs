import React from "react";
import {render,screen} from "@testing-library/react";
import LikeButtonWithEmojiBox from "./LikeButtonWithEmojiBox";

test("renders learn react link",() => {
	render(<LikeButtonWithEmojiBox/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})