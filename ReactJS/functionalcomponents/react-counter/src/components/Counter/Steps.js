import React, { Fragment } from 'react'
import css from './counter.module.css'

export default function Steps(props) {

	const { stepsValue } = props
	return (
		<Fragment>
			<span className={css.counterValue}>
				({stepsValue})
				</span>
		</Fragment>
	)
}
