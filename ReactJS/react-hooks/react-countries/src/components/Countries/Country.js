import React from 'react'
import css from './countries.module.css'

export default function Country({ country }) {

	const { name, flag } = country

	return (
		<div className={`${css.country} ${css.border}`}>
			<img src={flag} alt={name} className={css.flag} />
			<span>{country.name}</span>
		</div>
	)
}

