import express from 'express'

const app = express()

app.get('/test', (req, res) => {
  return res.send('Olá Nlw')
})

app.post('/test-post', (req, res) => {
  return res.send('Olá Nlw Post')
})

app.listen(3000, () => console.log('server is runningg'))
