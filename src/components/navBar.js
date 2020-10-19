import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
	console.log(pageInfo, "gg")
	return (
		<>
			<Navbar
				variant="dark"
				bg="dark"
				expand="lg"
				id="site-navbar"
				defaultActiveKey="/"
			>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto" activeKey="/" variant="pills">
						<Link to="/" className="link-no-style">
							<Nav.Link as="span" eventKey="/" className="link-no-style">
								HOME
							</Nav.Link>
						</Link>
						<Link to="/page-2" className="link-no-style">
							<Nav.Link as="span" eventKey="/page-2" className="link-no-style">
								ABOUT US
							</Nav.Link>
						</Link>
						<Link to="/about" className="link-no-style">
							<Nav.Link as="span" eventKey="Contact" className="link-no-style">
								CONTACT US
							</Nav.Link>
						</Link>
					</Nav>
				</Navbar.Collapse>
				{/* </Container> */}
			</Navbar>
		</>
	)
}

export default CustomNavbar
