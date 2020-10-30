import { Link } from "gatsby"
import React from "react"

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.css"
import logo from "./../../images/Logo.png"

const toolbar = (props) => (
	<header className="toolbar">
		<nav className="toolbar__navigation">
			<div className="toolbar__toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className="toolbar__logo">
				<Link
					to="/"
					style={{
						color: `Black`,
						textDecoration: `none`,
					}}
				>
					<img src={logo} alt={"Logo"} height="50rem" />
				</Link>
			</div>
			<div className="spacer" />
			<div className="toolbar_navigation-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/page-2">Abput Us</Link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
)

export default toolbar
