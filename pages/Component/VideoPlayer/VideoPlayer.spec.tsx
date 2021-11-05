import React from "react";
import {render,screen} from "@testing-library/react";
import {VideoPlayer} from "./VideoPlayer";

const videoJsOptions = {
	sources:[
        {
            src:"",
            type:"application/x-mpegURL"
        }
	]
}

test("renders learn react link",() => {
	render(<VideoPlayer options={videoJsOptions}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})