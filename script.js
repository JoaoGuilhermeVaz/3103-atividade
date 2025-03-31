const http = require('http')
const {soma} = require('./teste')

const PORT = 8000

const server = http.createServer((req,res)=>{
   let valores =
   req.url
   .replace('/', '')
   . replace('?', '')
   .split('&')
    '/?a=10&b=20'
    'a=10&b=20'
    [ 'a=10', 'b=20']
        for (item in valores){
            let chaveValor = item.split('=')
            console.log(chaveValor)
    }
    let resultado = 0
    res.end(`O valor final é ${resultado}`)
})

server.listen(PORT, ()=>{
    console.log(`o servidor foi inicializado na porta ${PORT}`)
})