import { Link } from "gatsby"
import React from "react"
import { Button } from "react-bootstrap"
import { SocialIcon } from "react-social-icons"

const Footer = ({ logo }) => {
	return (
		<div class="footer-col">
			<footer className="footer">
				<div className="l-footer">
					<h1>{/* <img src={logo} alt="logo" /> */}Logo</h1>
					<p>Address</p>
				</div>
				<ul className="r-footer">
					<li>
						<h2>Navigate</h2>
						<ul class="box">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/">About Us</Link>
							</li>
							<li>
								<Link to="/">Contact Us</Link>
							</li>
						</ul>
					</li>
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
								<SocialIcon url="http://twitter.com/" fgColor="#fff" />
								<SocialIcon url="http://instagram.com/" />
								<SocialIcon url="http://facebook.com/" fgColor="#fff" />
								<SocialIcon url="http://linkedin.com/" fgColor="#fff" />
							</li>
						</ul>
					</li>
				</ul>
				<div className="b-footer">
					<p>All rights reserved &cpy;ABCD 2020</p>
				</div>
			</footer>
		</div>
	)
}

export default Footer
