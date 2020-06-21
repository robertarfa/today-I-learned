import React from 'react'


export default function IncrementButton({ onDecrement }) {

	const handleButtonClick = () => {
		onDecrement('-')
	}

	return (

		< button
			onClick={handleButtonClick}
			className="waves-effect waves-light btn red darken-4">
			-
		</button>
	)

}
