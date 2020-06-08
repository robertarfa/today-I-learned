const express = require('express')
const fs = require('fs').promises

const router = express.Router()

router.post('/', async (req, res) => {
	let account = req.body
	try {
		let data = await fs.readFile(global.fileName, 'utf8')
		let json = JSON.parse(data)
		account = { id: json.nextId++, ...account }
		json.accounts.push(account)

		await fs.writeFile(global.fileName, JSON.stringify(json))
		res.end()

	} catch (err) {
		res.status(400).send({ error: err.message })
	}
})

router.get('/', async (_, res) => {
	try {
		let data = await fs.readFile(global.fileName, 'utf8')
		let json = JSON.parse(data)
		delete json.nextId
		res.send(json)
	} catch (error) {
		res.status(400).send({ error: error.message })
	}
})

router.get('/:id', async (req, res) => {

	try {
		let data = await fs.readFile(global.fileName, 'utf8')

		let json = JSON.parse(data)
		const account = json.accounts.find(account => account.id === parseInt(req.params.id, 10))
		if (account) {
			res.send(account)
		} else {
			res.send("Account does not exist")
		}
	} catch (error) {
		res.status(400).send({ error: err.message })
	}
})

router.delete('/:id', async (req, res) => {
	try {
		let data = await fs.readFile(global.fileName, 'utf8')

		let json = JSON.parse(data)
		let accounts = json.accounts.filter(account => account.id !== parseInt(req.params.id, 10))
		json.accounts = accounts

		await fs.writeFile(global.fileName, JSON.stringify(json))
		res.end()

	} catch (error) {
		res.status(400).send({ error: err.message })
	}
})

router.put('/', async (req, res) => {
	let newAccount = req.body

	try {
		let data = await fs.readFile(global.fileName, 'utf8')

		let json = JSON.parse(data)
		let oldIndex = json.accounts.findIndex(account => account.id === newAccount.id)
		json.accounts[oldIndex] = newAccount

		await fs.writeFile(global.fileName, JSON.stringify(json))

		res.send(json.accounts[oldIndex])

	} catch (err) {
		res.status(400).send({ error: err.message })
	}
})

router.post('/transaction', async (req, res) => {


	try {
		let params = req.body
		let data = await fs.readFile(global.fileName, 'utf8')

		let json = JSON.parse(data)
		let index = json.accounts.findIndex(account => account.id === params.id)

		if ((params.value < 0) && ((json.accounts[index].balance + params.value) < 0)) {
			throw new Error("Não há saldo suficiente")
		}

		json.accounts[index].balance += params.value

		fs.writeFile(global.fileName, JSON.stringify(json))

		res.send(json.accounts[index])

	} catch (error) {
		res.status(400).send({ error: error.message })
	}
})

module.exports = router
