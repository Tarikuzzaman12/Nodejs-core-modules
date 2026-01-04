const fs= require("fs")

console.log("start Reading....")
try{
const data = fs.readFileSync('./data/dairy.txt',"utf-8")
console.log('file content')
console.log(data)

}
catch(err){
    comsole.log(err.message)
}

console.log("finished")