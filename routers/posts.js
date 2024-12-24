const express = require('express')
const router = express.Router()


//index
router.get('/', (req,res) => {
  res.send('Index: stampo tutti i posts')
})

//show
router.get('/:id', (req,res) => {
  res.send('Show: stampo i dettagli del singolo post' + req.params.id)
})

//store
router.post('/', (req,res) => {
  res.send('Store : creo un nuovo post')
})

//update
router.put('/:id', (req,res) => {
  res.send('Update : stampo tutti i post')
})

//modify
router.patch('/:id', (req,res) => {
  res.send('Modify : stampo tutti i post')
})

//destroy
router.delete('/:id', (req,res) => {
  res.send('Destroy : stampo tutti i post')
})

module.exports =  router