const express = require('express')
const fs = require('fs').promises
const app = express()
const accountsRouter = require("./routes/accounts.js")
const winston = require('winston')

global.fileName = 'accounts.json'

const { combine, timestamp, label, printf } = winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level}: ${message}`
})

global.logger = winston.createLogger({
	level: "silly",
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.File)({ filename: 'my-bank-api.log' })
	],
	format: combine
})

//tem que informar para o express que está utilizando o json
app.use(express.json())
app.use('/account', accountsRouter)


//writeFile sempre vai apagar o conteúdo do arquivo e colocar um conteúdo novo
//appendFile não vai apagar, vai adicionar o novo conteúdo
app.listen(3000, async () => {
	try {
		await fs.readFile(global.fileName, 'utf8')
		logger.info('Api running')

	} catch (err) {

		const createJsonFile = {
			nextId: 1,
			accounts: []
		}
		fs.writeFile(global.fileName, JSON.stringify(createJsonFile)).catch(err => {
			logger.err(err)
		})
	}
})
