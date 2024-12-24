const express = require('express')
const posts = require('./posts')
const postsRouter = require('./routers/posts.js')
const app= express()
const port = 3000

// app.use(express.static('public'));
app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log('Sono in ascolto alla porta 3000')
})