import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import PageHeaderMoreOptionsButtonWithMoreBox from "./PageHeaderMoreOptionsButtonWithMoreBox";

test("renders learn react link",() => {
	const [smallWord,setSmallWord] = useState(false);
	const [mediumWord,setMediumWord] = useState(true);
	const [largeWord,setLargeWord] = useState(false);
	render(<PageHeaderMoreOptionsButtonWithMoreBox smallWord={smallWord} mediumWord={mediumWord} largeWord={largeWord} setSmallWord={setSmallWord} setMediumWord={setMediumWord} setLargeWord={setLargeWord} displayDateOffsetForPageHeaderTopButtons={0}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})