import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import ProductCarousel from "../components/ProductCaorusel"
// import ProductCard from "../components/ProductCard"
import SEO from "../components/seo"
// import video from "../video/dummy.mp4"
import image from "./../images/productImage.jpg"

const IndexPage = () => (
	<Layout pageInfo={{ pageName: "index" }}>
		<SEO
			title="President AAC Blocks"
			keywords={[
				`president`,
				`president aac blocks`,
				`aac blocks`,
				`aac`,
				"blocks",
			]}
		/>

		<Row noGutters>
			<Col className="no-gutters">
				<ProductCarousel
					data={[
						{
							image,
							label: "Product 1",
						},
						{
							image,
							label: "Product 2",
						},
						{
							image,
							label: "Product 3",
						},
					]}
				/>
			</Col>
		</Row>
		<Row noGutters className="video-player">
			<video height="100%" width="80%" loop muted autoPlay>
				{/* <source src={video} type="video/mp4" /> */}
			</video>
		</Row>
		<Row noGutters className="video-background">
			<Col>
				<h1>PRODUCTS WE OFFER</h1>
			</Col>
		</Row>

		<Container className="mt-1 product-cards">
			<Row>
				<Col>{/* <ProductCard /> */}</Col>
				<Col>{/* <ProductCard /> */}</Col>
				<Col>{/* <ProductCard /> */}</Col>
				<Col>{/* <ProductCard /> */}</Col>
			</Row>
		</Container>
	</Layout>
)

export default IndexPage
