import React from "react"
import ReactCardCarousel from "react-card-carousel"
import PRoductCard from "./ProductCard"

const ProductCardCarousel = ({ data }) => {
	const items = data.map(({ image, title, description, link }) => (
		<div className="card-carousel">
			<PRoductCard
				image={image}
				title={title}
				description={description}
				link="/page-2"
			/>
		</div>
	))
	return (
		<div className="card-carousel-container">
			<ReactCardCarousel autoplay={true} autoplay_speed={2500}>
				{items}
			</ReactCardCarousel>
		</div>
	)
}

export default ProductCardCarousel
