import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import {PageHeader} from "./PageHeader";

test("renders learn react link",() => {
	const [toggle,setToggle] = useState(false);
	const [search,setSearch] = useState(false);
	render(<PageHeader toggle={toggle} openToggle={setToggle} search={search} openSearch={setSearch}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})