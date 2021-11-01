import React from "react";
import {render,screen} from "@testing-library/react";
import {HomeCategoryBlock} from "./HomeCategoryBlock";

export const category = {
	cate_id:"",
	name_cn:"",
	name_en:"",
	status:"",
	seq:""
}

test("renders learn react link", () => {
	render(<HomeCategoryBlock category={category}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})