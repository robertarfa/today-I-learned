import React from 'react'
import css from './header.module.css'

import { formatNumber } from './../../helpers/formatHelpers'

export default function Header({ onChangeFilter, filter, countryCount, totalPopulation }) {

	const handleInputChange = (event) => {

		const newText = event.target.value
		onChangeFilter(newText)
	}

	return (
		<div className={css.flexRow}>

			<input
				type="text" value={filter}
				onChange={handleInputChange}
				className={css.inputStyle}
				placeholder='Enter a country name'
			/> |

			<span className={css.info}>Number of Countries: <strong>{countryCount}</strong></span> |

			<span className={css.info}>Population: <strong>{formatNumber(totalPopulation)}</strong></span>

		</div>
	)
}

