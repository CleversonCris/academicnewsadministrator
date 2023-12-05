const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
import { client } from './db/conn'
import { v4 } from 'uuid'
const uuidForSchool = v4()
const uuidForAccount = v4()


const idRefer = Math.random() * 999999999999
const idReferFormated = parseInt(idRefer)


app.post('/createschool', async (req, res) => {
    const {name, password, email} = req.body
    const query = `INSERT INTO schools (idschool, idrefer, email, password, accounts_id, name) values('${uuidForSchool}', '${idReferFormated}', '${email}', '${password}', '${uuidForAccount}', '${name}')`

    const response = await client.query(query)

    if(response){
        res.json({msg: 'Dados inseridos com sucesso no banco de dados'})
        console.log('inseriu')
    }
})

app.get('/getschools', async(req, res) => {
    const query = `SELECT * FROM schools`
    const result = await client.query(query)

    if(result.rows){
        res.json({schools: result.rows})
    }
})

app.post('/deleteschool', async(req, res) => {
    const {idschool} = req.body
    console.log(idschool)

    const query = `DELETE FROM schools WHERE idschool = '${idschool}'`

    const result = await client.query(query)

    if(result){
        res.json({msg: 'Conta excluida com sucesso'})
    }
})

app.listen(3000, () => {
    console.log('Rodando admistrador na porta 3000')
})