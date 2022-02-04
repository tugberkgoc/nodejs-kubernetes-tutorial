const express = require('express')

const app = express()

app.get('/', async (req, res) => {
  try {
    res.status(200).send({ hello: 'world' })
  } catch (e) {
    res.status(500).send('Internal Server Error')
  }
})

const PORT = process.env.PORT || 9001
app.listen(PORT, () => {
  console.log(`Server running on port number: ${PORT}`)
})
