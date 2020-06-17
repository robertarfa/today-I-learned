import React, { Component } from 'react'

import css from './user.module.css'

export default class User extends Component {

	render() {
		const { name, picture } = this.props.user

		return (
			<div className={css.flexRow}>
				<img src={picture.large} alt={name.first} className={css.avatar} />

				<span> {name.first} {name.last}</span>
			</div>
		)
	}
}
