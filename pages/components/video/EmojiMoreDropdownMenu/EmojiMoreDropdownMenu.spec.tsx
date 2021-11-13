import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import EmojiMoreDropdownMenu from "./EmojiMoreDropdownMenu";

test("renders learn react link",() => {
	const [allClick,setAllClick] = useState(true);
	const [likeClick,setLikeClick] = useState(false);
	const [happyClick,setHappyClick] = useState(false);
	const [sadClick,setSadClick] = useState(false);
	const [angryClick,setAngryClick] = useState(false);
	render(<EmojiMoreDropdownMenu allClick={allClick} likeClick={likeClick} happyClick={happyClick} sadClick={sadClick} angryClick={angryClick} setAllClick={setAllClick} setLikeClick={setLikeClick} setHappyClick={setHappyClick} setSadClick={setSadClick} setAngryClick={setAngryClick} emojiType={0}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})