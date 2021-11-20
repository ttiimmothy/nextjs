import React from "react";
import {render,screen} from "@testing-library/react";
import {VideoBlock} from "./VideoBlock";

export const video = {
	cate_id:"",
	created_at:"",
	desc:"",
	display_date:"",
	end_date:null,
	expiry_date:"",
	id:"",
	is_vip:"",
	pic_url:"",
	prog_id:"",
	prog_name:"",
	source:"",
	status:"",
	subcate_id:"",
	subcate_name:"",
	title:"",
	updated_at:"",
	video_url:"",
}

test("renders learn react link",() => {
	render(<VideoBlock video={video}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})