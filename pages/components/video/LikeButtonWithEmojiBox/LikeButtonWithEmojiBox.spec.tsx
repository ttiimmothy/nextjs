import React from "react";
import {render,screen} from "@testing-library/react";
import LikeButtonWithEmojiBox from "./LikeButtonWithEmojiBox";

test("renders learn react link",() => {
	render(<LikeButtonWithEmojiBox displayDateOffset={0} windowWidth={0}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})