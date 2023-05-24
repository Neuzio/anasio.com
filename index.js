const express = require('express')
const app = express()
const port = 4000
const bodyparser =require('body-parser')


//configurar bodyparser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


//configurar o ejs
app.set('view engine', 'ejs')

//configurar arquivos staticos
app.use(express.static('public'))
//Rota principal
app.get('/main', (req , res)=>{
    res.render('main')
})
//Rota home2
app.get('/home2', (req , res)=>{
    res.render('home')
})

//Rota play
app.get('/vigadores', (req , res)=>{
    res.render('page/vigadores')
})

//Rota play
app.get('/teste', (req , res)=>{
    res.render('page/teste')
})



//Rota filmes
app.get('/filmes2', (req , res)=>{
    res.render('page/filmes2')
})

//Rota series
app.get('/series', (req , res)=>{
    res.render('page/series')
})


//Rota home
app.get('/home', (req , res)=>{
    res.send('<h1>Pagina home</h1>')
})
//iniciando o servidor
app.listen(port , ()=>{
    console.log('Servidor Online!')
})