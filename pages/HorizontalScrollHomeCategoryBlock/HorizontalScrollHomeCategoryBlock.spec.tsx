import React from "react";
import {render,screen} from "@testing-library/react";
import {HorizontalScrollHomeCategoryBlock} from "./HorizontalScrollHomeCategoryBlock";
import {category} from "../HomeCategoryBlock/HomeCategoryBlock.spec";


test("renders learn react link", () => {
	render(<HorizontalScrollHomeCategoryBlock category={category}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})