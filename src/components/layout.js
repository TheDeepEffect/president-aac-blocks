/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"
import Footer from "./footer"
// import Footer from "./footer"

const Layout = ({ children, pageInfo }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={(data) => (
			<>
				<Container fluid className="px-0 main">
					<Row noGutters className="justify-content-center">
						<Col>
							<Navbar pageInfo={pageInfo} />
						</Col>
					</Row>
					<Row noGutters>
						<Col>
							<main>{children}</main>
						</Col>
					</Row>
				</Container>

				<Footer />
			</>
		)}
	/>
)

export default Layout
