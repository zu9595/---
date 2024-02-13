require('dotenv').config({ path : './db/dbSetting.env'})
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json());

app.use(express.urlencoded({extended : false}));

app.listen(3030, ()=>{
    console.log('Server Start, http://localhost:3030');
});
app.get('/boards', async (req, res)=>{
    let list = await mysql.executeQuery('boardlist');
    res.json(list);
})

app.get('/boards/:no', async (req, res) => {
    let boardNo = req.params.no;
    let info = (await mysql.executeQuery('boardInfo',boardNo))[0];
    res.json(info);
})

app.post('/boards', async (req, res)=>{
    let data = req.body.param;  
    let result = await mysql.executeQuery('boardAdd', data);
    res.json(result);
})

app.put('/boards/:no', async ( req, res ) => {
    let result = await updateAll(req);
    res.json(result);
});

async function updateAll(request){
    let data = [ selectedInfo(request.body.param) 
                , request.params.id];
    let result = await mysql.executeQuery('boardUpdate', data);
    return result;
}

function selectedInfo(obj){
    let delData = [];
    let newObj = {};
    let isTargeted = null;    
    for( let field in obj ){ 
        isTargeted = false;
        for(let target of delData){
            if(field == target) {
                isTargeted = true;
                break;
            }            
        }
        if(!isTargeted){
            newObj[field] = obj[field];
        }
    }
    return newObj;
};