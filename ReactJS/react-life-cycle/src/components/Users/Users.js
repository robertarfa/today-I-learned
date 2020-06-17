import React, { Component } from 'react'
import User from './User';

export default class Users extends Component {

	constructor() {
		super()
		this.state = {
			secondsVisible: 0,
		}

		this.interval = null
	}

	componentDidMount() {
		console.log('DidMount Users.js');

		this.interval = setInterval(() => {
			const { secondsVisible } = this.state
			this.setState({

				secondsVisible: secondsVisible + 1
			})
		}, 1000)
	}

	componentDidUpdate() {
		console.log('didUpdate users.js');
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {

		const { usersList } = this.props
		const { secondsVisible } = this.state

		//console.log(usersList);
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
}

