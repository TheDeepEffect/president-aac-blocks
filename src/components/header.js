import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "./../images/Logo.png"

const Header = ({ siteTitle }) => (
	<header
		style={{
			background: `#fff`,
		}}
	>
		<div
			style={{
				margin: `0 auto`,

				padding: `1.45rem 1.0875rem`,
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `Black`,
						textDecoration: `none`,
					}}
				>
					<img src={logo} alt={siteTitle} height="100vh" />
				</Link>
			</h1>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
