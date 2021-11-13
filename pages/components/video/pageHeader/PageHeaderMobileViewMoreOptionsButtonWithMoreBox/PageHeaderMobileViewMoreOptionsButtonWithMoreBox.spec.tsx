import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import PageHeaderMobileViewMoreOptionsButtonWithMoreBox from "./PageHeaderMobileViewMoreOptionsButtonWithMoreBox";

test("renders learn react link",() => {
	const [smallWord,setSmallWord] = useState(false);
	const [mediumWord,setMediumWord] = useState(true);
	const [largeWord,setLargeWord] = useState(false);
	const [wordSize,setWordSize] = useState(false);
	render(<PageHeaderMobileViewMoreOptionsButtonWithMoreBox smallWord={smallWord} mediumWord={mediumWord} largeWord={largeWord} wordSizeBox={wordSize} setSmallWord={setSmallWord} setMediumWord={setMediumWord} setLargeWord={setLargeWord} setWordSizeBox={setWordSize}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})