import React from 'react'

const stars = {
	full: '★',
	empty: '☆',
}

const maxStars = 10

export default function Popularity({ value }) {

	const fullStars = stars.full.repeat(value)
	const emptyStart = stars.empty.repeat(maxStars - value)

	return (
		<div style={{ fontSize: '1.5rem', color: '#f39c12' }}>
			{fullStars}
			{emptyStart}
		</div>
	)
}
