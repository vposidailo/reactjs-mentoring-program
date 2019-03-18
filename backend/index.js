const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Movie backend'))
app.listen(3001, () => console.log('Listening on port 3001!'))