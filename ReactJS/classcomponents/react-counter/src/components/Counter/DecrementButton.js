import React, { Component } from 'react'


export default class IncrementButton extends Component {
	handleButtonClick = () => {
		this.props.onDecrement('-')
	}

	render() {

		return (

			< button
				onClick={this.handleButtonClick}
				className="waves-effect waves-light btn red darken-4">
				-
			</button>


		)
	}
}
