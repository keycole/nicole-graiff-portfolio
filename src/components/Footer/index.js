import React from "react";

function Footer() {
    return (
        <footer className="ui bottom fixed three item menu">
            <a className="item" href="https://www.linkedin.com/in/fullstackdev-nicoleg/" target="_blank" rel="noopener noreferrer"><i className="green linkedin icon"></i>&nbsp;LinkedIn</a>
            <a className="item" href="https://github.com/keycole" target="_blank" rel="noopener noreferrer"><i className="green github alternate icon"></i>&nbsp;GitHub</a>
            <a className="item" href="mailto:nicole.graiff@gmail.com?subject=Portfolio Contact Message" target="_blank" rel="noopener noreferrer"><i className="green at icon"></i>&nbsp;Email</a>
        </footer>
    )
}

export default Footer;