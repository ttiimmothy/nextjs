import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import {video} from "../VideoBlock/VideoBlock.spec";
import {PageHeader} from "./PageHeader";

test("renders learn react link",() => {
	const [toggle,setToggle] = useState(false);
	const [search,setSearch] = useState(false);
	const [smallWord,setSmallWord] = useState(false);
	const [mediumWord,setMediumWord] = useState(true);
	const [largeWord,setLargeWord] = useState(false);
	render(<PageHeader toggle={toggle} openToggle={setToggle} search={search} openSearch={setSearch} topButtonsOffset={0} smallWord={smallWord} mediumWord={mediumWord} largeWord={largeWord} setSmallWord={setSmallWord} setMediumWord={setMediumWord} setLargeWord={setLargeWord} video={video}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})