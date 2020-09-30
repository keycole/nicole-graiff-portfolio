import React from "react";
import "./style.css"

function Navbar() {
	return (
		<div>
			<div className="ui top fixed green two item inverted menu" id="navigation">
				<a className="active item" id="home" href="/">
					Home
    			</a>
				<a className="item" id="portfolio" href="/portfolio">
					Portfolio
    			</a>
			</div>
		</div>
	)
}

export default Navbar;