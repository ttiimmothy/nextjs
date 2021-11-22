import {useRouter} from "next/router";
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
	const router = useRouter();
	render(<VideoPlayer options={videoJsOptions} router={router}/>);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})