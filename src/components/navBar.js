import React, { useState } from "react"
import { Link } from "gatsby"
import Toolbar from "./Toolbar/Toolbar"
import SideDrawer from "./SideDrawer/SideDrawer"
import Backdrop from "./Backdrop/Backdrop"

const CustomNavbar = ({ pageInfo }) => {
	console.log(pageInfo, "gg")
	const [state, setState] = useState({
		sideDrawerOpen: false,
	})

	const { sideDrawerOpen } = state
	console.log(sideDrawerOpen)
	return (
		<header
			style={{
				background: `#fff`,
			}}
		>
			<div
				style={{
					padding: `1.45rem 1.0875rem`,
				}}
			>
				<Toolbar
					drawerClickHandler={() => {
						setState({
							...state,
							sideDrawerOpen: !sideDrawerOpen,
						})
					}}
				/>
				<SideDrawer show={sideDrawerOpen} />
				{sideDrawerOpen && (
					<Backdrop
						click={() =>
							setState({
								...state,
								sideDrawerOpen: false,
							})
						}
					/>
				)}
			</div>
		</header>
	)
}

export default CustomNavbar
