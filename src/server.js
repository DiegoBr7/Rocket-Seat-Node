import http from 'node:http'

//rotas

const users = []

//Criar um usuario (name , email , senha)

// http status code

const server = http.createServer((req,res)=>{

    const {method , url} = req
    
    if (method == 'GET' && url =='/users'){
        return res
        .setHeader('Content-type','aplication/json')
        .end(JSON.stringify(users))
}
    if (method == 'POST' && url =='/users'){
     users.push({
            id:1,
            nome:"john",
            email:"john@example.com"
        })
        
        return res.writeHead(404).end()
    }
        return res.end('Hello World')
})

server.listen(3333)


//  CommonJS => require
//ESModules => import/export
// Aplicacoes http => API