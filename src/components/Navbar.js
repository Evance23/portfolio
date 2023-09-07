import "./NavbarStyles.css"

import { Link } from "react-router-dom"



import React from "react"
const Navbar = ()=> {
	return (
		
		<div className="header">
			<Link to ="/">
				<h1>Portfolio</h1>
			</Link>

		</div>
		
	)
}

export default Navbar