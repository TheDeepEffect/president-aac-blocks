import { Link } from "gatsby"
import React from "react"
import { Button } from "react-bootstrap"
import { SocialIcon } from "react-social-icons"
import logo from "./../images/Logo.png"
const Footer = () => {
	return (
		<div class="footer-col">
			<footer className="footer">
				<div className="l-footer">
					<h1>
						<img src={logo} alt="logo" height="100vh" />
					</h1>
					<p>Address</p>
				</div>
				<ul className="r-footer">
					<li></li>
					<li className="features">
						<h2>Want to know more?</h2>
						<ul className="box h-box">
							<li>
								<Button>
									<Link
										to="/page-2"
										style={{
											color: "black",
											textDecoration: "none",
										}}
									>
										Contact Us
									</Link>
								</Button>
							</li>
						</ul>
					</li>
					<li>
						<h2>Follow Us</h2>
						<ul className="box social-media">
							<li>
								<SocialIcon
									url="http://twitter.com/"
									fgColor="#fff"
									style={{
										height: "35px",
										width: "35px",
									}}
								/>
								<SocialIcon
									url="http://instagram.com/"
									style={{
										height: "35px",
										width: "35px",
									}}
								/>
								<SocialIcon
									url="http://facebook.com/"
									fgColor="#fff"
									style={{
										height: "35px",
										width: "35px",
									}}
								/>
								<SocialIcon
									url="http://linkedin.com/"
									fgColor="#fff"
									style={{
										height: "35px",
										width: "35px",
									}}
								/>
							</li>
						</ul>
					</li>
				</ul>
				<div className="b-footer">
					<p>All rights reserved &copy;ABCD 2020</p>
				</div>
			</footer>
		</div>
	)
}

export default Footer
