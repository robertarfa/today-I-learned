const express = require('express')
const fs = require('fs').promises
const app = express()
const accountsRouter = require("./routes/accounts.js")

global.fileName = 'accounts.json'

//tem que informar para o express que está utilizando o json
app.use(express.json())
app.use('/account', accountsRouter)
//writeFile sempre vai apagar o conteúdo do arquivo e colocar um conteúdo novo
//appendFile não vai apagar, vai adicionar o novo conteúdo


app.listen(3000, async () => {
	try {
		await fs.readFile(global.fileName, 'utf8')
		console.log('Api running')

	} catch (err) {

		const createJsonFile = {
			nextId: 1,
			accounts: []
		}
		fs.writeFile(global.fileName, JSON.stringify(createJsonFile)).catch(err => {
			console.log('File was not created')
		})
	}
})
