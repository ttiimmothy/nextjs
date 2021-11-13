import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import PageHeaderMobileViewMoreOptionsButtonWithMoreBox from "./PageHeaderMobileViewMoreOptionsButtonWithMoreBox";

test("renders learn react link",() => {
	const [smallWord,setSmallWord] = useState(false);
	const [mediumWord,setMediumWord] = useState(true);
	const [largeWord,setLargeWord] = useState(false);
	render(
		<PageHeaderMobileViewMoreOptionsButtonWithMoreBox
			smallWord={smallWord}
			mediumWord={mediumWord}
			largeWord={largeWord}
			setSmallWord={setSmallWord}
			setMediumWord={setMediumWord}
			setLargeWord={setLargeWord}
		/>
	)
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})