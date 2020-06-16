import React, { Component, Fragment } from 'react'
import css from './counter.module.css'

export default class Steps extends Component {
	render() {
		return (
			<Fragment>
				<span className={css.counterValue}>
					({this.props.stepsValue})
				</span>

			</Fragment>
		)
	}
}
