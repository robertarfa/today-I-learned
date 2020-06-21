import React, { Component, Fragment } from 'react'
import css from './counter.module.css'

export default class Value extends Component {
	render() {
		return (
			<Fragment>
				<span className={css.counterValue}>
					{this.props.value}
				</span>
			</Fragment>
		)
	}
}
