import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import ProductCarousel from "../components/ProductCaorusel"
import ProductCard from "../components/ProductCard"
import SEO from "../components/seo"
import Video from "../components/video"
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
			<Video url="https://www.youtube-nocookie.com/embed/wfKA3OY7IWs?controls=0" />
		</Row>
		<Row noGutters className="video-background">
			<Col>
				<h1>PRODUCTS WE OFFER</h1>
			</Col>
		</Row>

		<Container className="mt-1 product-cards">
			<Row noGutters>
				<Col>
					<ProductCard
						image={image}
						title="Product"
						description="Description of a product"
						link="/page-2"
					/>
				</Col>
				<Col>
					<ProductCard
						image={image}
						title="Product"
						description="Description of a product"
						link="/page-2"
					/>
				</Col>
				<Col>
					<ProductCard
						image={image}
						title="Product"
						description="Description of a product"
						link="/page-2"
					/>
				</Col>
				<Col>
					<ProductCard
						image={image}
						title="Product"
						description="Description of a product"
						link="/page-2"
					/>
				</Col>
			</Row>
		</Container>
	</Layout>
)

export default IndexPage
