import React from "react"
import { Carousel } from "react-bootstrap"
import PropTypes from "prop-types"

const ProductCarousel = ({ data }) => {
	const carouselItems = data.map(({ image, label }) => {
		return (
			<Carousel.Item>
				<img className="d-block w-100" src={image} alt="First slide" />
				<Carousel.Caption>
					<h3>{label}</h3>
				</Carousel.Caption>
			</Carousel.Item>
		)
	})
	return <Carousel>{carouselItems}</Carousel>
}

ProductCarousel.propTypes = {
	data: PropTypes.array,
}

export default ProductCarousel
