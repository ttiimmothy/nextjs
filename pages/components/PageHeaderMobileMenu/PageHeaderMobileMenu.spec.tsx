import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import {PageHeaderMobileMenu} from "./PageHeaderMobileMenu";

test("renders learn react link",() => {
	const [toggle,setToggle] = useState(false);
	render(<PageHeaderMobileMenu toggle={toggle}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})