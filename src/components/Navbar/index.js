import React from "react";

function Navbar() {
	return (
		<div>
			<div className="ui top fixed green two item inverted menu" id="navigation">
				<a className="active item" id="home" href="/nicole-graiff-portfolio/">
					Home
    		</a>
				<a className="item" id="portfolio" href="/nicole-graiff-portfolio/portfolio">
					Portfolio
    		</a>
			</div>
		</div>
	)
}

export default Navbar;