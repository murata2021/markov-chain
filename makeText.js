/** Command-line tool to generate Markov text. */

const {MarkovMachine}=require('./markov')
const axios=require('axios')
const fs=require('fs')
const process = require('process');

const sourceType = process.argv[2];
const source=process.argv[3]
// console.log(sourceType)
// console.log(source)


function cat(path){

    fs.readFile(path,'utf8',(err,data)=>{
        if(err){
            console.log('ERROR: ',err.message)
            process.exit(1)
        }
        let a=new MarkovMachine(data)
        console.log(`...text generated from ${path}...`)
        console.log(a.makeText())
    })
}

async function webCat(path){

    try{
        let res=await axios.get(path)
        let a=new MarkovMachine(res.data)
        console.log(`...text generated from ${path}...`)
        console.log(a.makeText())
    }
    catch(e){
        console.log(`Error fetching ${path}: `)
        console.log(`   Error: Request failed with status code 404`)
    }
}

if (sourceType==='file'){
    
    cat(source)

}
else if(sourceType==='url'){
    webCat(source)

}
else{
    console.log( 'Invalid source type! Please select file or url as your data source! ')
}

