import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import {LoginModal} from "./LoginModal";

test("renders learn react link",() => {
	const [login,setLogin] = useState(false);
	render(<LoginModal closeButton={setLogin}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})