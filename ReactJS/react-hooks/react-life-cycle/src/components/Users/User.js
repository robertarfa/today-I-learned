import React from 'react'

import css from './user.module.css'

export default function User(props) {

	const { name, picture } = props.user

	return (
		<div className={css.flexRow}>
			<img src={picture.large} alt={name.first} className={css.avatar} />

			<span> {name.first} {name.last}</span>
		</div>
	)
}

