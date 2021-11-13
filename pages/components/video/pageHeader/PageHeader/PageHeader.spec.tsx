import React,{useRef,useState} from "react";
import {render,screen} from "@testing-library/react";
import {video} from "../../../VideoBlock/VideoBlock.spec";
import {PageHeader} from "./PageHeader";

test("renders learn react link",() => {
	const [toggle,setToggle] = useState(false);
	const [search,setSearch] = useState(false);
	const [smallWord,setSmallWord] = useState(false);
	const [mediumWord,setMediumWord] = useState(true);
	const [largeWord,setLargeWord] = useState(false);
	const scrollToComment = useRef<any>(null);
	render(<PageHeader toggle={toggle} openToggle={setToggle} search={search} openSearch={setSearch} displayDateOffset={0} displayDateOffsetForPageHeaderTopButtons={0} smallWord={smallWord} mediumWord={mediumWord} largeWord={largeWord} setSmallWord={setSmallWord} setMediumWord={setMediumWord} setLargeWord={setLargeWord} video={video} windowWidth={0} scrollToComment={scrollToComment}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})