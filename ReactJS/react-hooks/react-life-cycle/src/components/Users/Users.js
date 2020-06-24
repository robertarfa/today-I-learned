import React, { useState, useEffect } from 'react'
import User from './User';

export default function Users({ usersList }) {

	const [secondsVisible, setSecondsVisible] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setSecondsVisible(secondsVisible + 1)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [secondsVisible])

	return (
		<div>

			<p>Users Component visível por {secondsVisible} segundos</p>

			<ul>
				{usersList.map(user => {
					const { login } = user
					return (
						<div key={login.uuid}>
							<li>
								<User user={user} />
							</li>
						</div>
					)
				})}
			</ul>
		</div>
	)
}

