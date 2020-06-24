const formatter = Intl.NumberFormat('pt-Br')

function formatNumber(value) {
	return formatter.format(value)
}

export { formatNumber }