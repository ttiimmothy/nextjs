import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import {EmojiNumberDetailModal} from "./EmojiNumberDetailModal";

test("renders learn react link",() => {
	const [emojiNumberDetail,setEmojiNumberDetail] = useState(false);
	render(<EmojiNumberDetailModal closeButton={setEmojiNumberDetail}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})