import { Link } from "gatsby"
import React from "react"
import { Button, Card } from "react-bootstrap"

export const PRoductCard = ({ title, description, image, link }) => {
	return (
		<Card style={{ width: "15rem" }} className="product-card">
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Button variant="primary">
					<Link
						style={{
							textDecoration: "none",
							color: "black",
						}}
						to="/page-2"
					>
						Know more
					</Link>
				</Button>
			</Card.Body>
		</Card>
	)
}
export default PRoductCard
