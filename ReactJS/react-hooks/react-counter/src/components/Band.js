import React, { useState } from 'react'

const BAND_MEMBERS = [
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
export default function Band() {

	const [bandMembers] = useState(BAND_MEMBERS)

	const [bandName] = useState('Master')

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

