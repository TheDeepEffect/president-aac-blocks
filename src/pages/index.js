import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import ProductCarousel from "../components/ProductCaorusel"
import ProductCard from "../components/ProductCard"
import ProductCardCarousel from "../components/ProductCardCarousel"
import SEO from "../components/seo"
import Video from "../components/video"
import image from "./../images/productImage.jpg"

//COntact us and follow us ke beech me gap...
//Products ko carousel krna hai

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

		<Row noGutters>
			<Col>
				<ProductCardCarousel
					data={[
						{
							image,
							title: "Product 1",
							description: "Product 1 description!",
						},
						{
							image,
							title: "Product 2",
							description: "Product 2 description!",
						},
						{
							image,
							title: "Product 3",
							description: "Product 3 description!",
						},
						{
							image,
							title: "Product 4",
							description: "Product 4 description!",
						},
					]}
				/>
			</Col>
		</Row>
	</Layout>
)

export default IndexPage
