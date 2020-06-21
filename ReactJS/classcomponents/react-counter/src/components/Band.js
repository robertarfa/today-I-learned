import React, { Component } from 'react'

export default class Band extends Component {
	constructor() {
		super()

		this.state = {
			bandName: "Master",

			bandMembers: [
				{
					id: 1,
					name: "Pink",
					instrument: "Voice"
				},
				{
					id: 2,
					name: "Steven Tyler",
					instrument: "Guitar"
				},
				{
					id: 3,
					name: "Bruce Dickinson",
					instrument: "Bass"
				},
			]
		}

	}

	render() {

		const { bandName, bandMembers } = this.state

		return (
			<div>
				<h5>{bandName}</h5>

				<ul>
					{bandMembers.map(({ id, name, instrument }) => {
						return (

							<li key={id}>{name} - {instrument}</li>

						)
					})}
				</ul>
			</div>
		)
	}
}
