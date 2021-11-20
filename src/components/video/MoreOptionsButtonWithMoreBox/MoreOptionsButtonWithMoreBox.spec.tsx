import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import MoreOptionsButtonWithMoreBox from "./MoreOptionsButtonWithMoreBox";

test("renders learn react link",() => {
	const [smallWord,setSmallWord] = useState(false);
	const [mediumWord,setMediumWord] = useState(true);
	const [largeWord,setLargeWord] = useState(false);
	render(
		<MoreOptionsButtonWithMoreBox
			smallWord={smallWord}
			mediumWord={mediumWord}
			largeWord={largeWord}
			setSmallWord={setSmallWord}
			setMediumWord={setMediumWord}
			setLargeWord={setLargeWord}
			displayDateOffset={0}
			windowWidth={0}
		/>
	)
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})