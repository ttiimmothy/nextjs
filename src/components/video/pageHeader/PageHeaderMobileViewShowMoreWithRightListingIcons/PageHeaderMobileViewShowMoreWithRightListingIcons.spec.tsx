import React,{useState} from "react";
import {render,screen} from "@testing-library/react";
import PageHeaderMobileViewShowMoreWithRightListingIcons from "./PageHeaderMobileViewShowMoreWithRightListingIcons";

test("renders learn react link",() => {
	const [search,setSearch] = useState(false);
	const [smallWord,setSmallWord] = useState(false);
	const [mediumWord,setMediumWord] = useState(true);
	const [largeWord,setLargeWord] = useState(false);
	const [showFullMenu,setShowFullMenu] = useState(false);
	const [login,setLogin] = useState(false);
	const [more,setMore] = useState(false);

	render(
		<PageHeaderMobileViewShowMoreWithRightListingIcons
			showFullMenu={showFullMenu}
			search={search}
			login={login}
			more={more}
			smallWord={smallWord}
			mediumWord={mediumWord}
			largeWord={largeWord}
			setShowFullMenu={setShowFullMenu}
			openSearch={setSearch}
			setLogin={setLogin}
			setMore={setMore}
			setSmallWord={setSmallWord}
			setMediumWord={setMediumWord}
			setLargeWord={setLargeWord}
		/>
	)
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
})