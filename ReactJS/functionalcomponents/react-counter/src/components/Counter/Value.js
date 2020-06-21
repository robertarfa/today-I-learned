import React, { Component, Fragment } from 'react'
import css from './counter.module.css'

export default function Value(props) {

	const { value } = props

	return (
		<Fragment>
			<span className={css.counterValue}>
				{value}
			</span>
		</Fragment>
	)
}

