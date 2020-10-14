import React from "react"
import PropTypes from "prop-types"
const Video = ({ url }) => {
	return (
		<div className="video">
			<iframe
				width="560"
				height="315"
				src={url}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			></iframe>
		</div>
	)
}

Video.propTypes = {
	url: PropTypes.string,
}
export default Video
