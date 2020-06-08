const express = require('express')
const fs = require('fs')
const app = express()
const accountsRouter = require("./routes/accounts.js")

global.fileName = 'accounts.json'

//tem que informar para o express que está utilizando o json
app.use(express.json())
app.use('/account', accountsRouter)
//writeFile sempre vai apagar o conteúdo do arquivo e colocar um conteúdo novo
//appendFile não vai apagar, vai adicionar o novo conteúdo


app.listen(3000, function () {
	try {
		fs.readFile(global.fileName, 'utf8', (err, data) => {
			if (err) {
				const createJsonFile = {
					nextId: 1,
					accounts: []

				}
				fs.writeFile(global.fileName, JSON.stringify(createJsonFile), err => {
					if (err) {
						console.log('File was not created')
					}
				})
			}
		})

	} catch (err) {
		console.log("File does not exist")

	}
	console.log('Api running')
})
