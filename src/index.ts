
//import * as Express from 'express' //=> * as =>importa tudo o que tem no 'express'
import Express from 'express'

const app = Express()

//get
app.get('/', (req : Express.Request, res : Express.Response) => {
    res.send('test')
    //res.sendStatus()
})

//server
app.listen(8080, err => {
    console.log('running new version')
})
