import React,{useRef} from "react";
import {render,screen} from "@testing-library/react";
import {CommentSection} from "./CommentSection";

test("renders learn react link",() => {
	const scrollToComment = useRef<any>(null);
	render(<CommentSection scrollToCommentRef={scrollToComment}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})