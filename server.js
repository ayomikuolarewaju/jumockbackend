const express =  require('express')
const router  =  require('./router')
require('./db')
const app = express()



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)





app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});