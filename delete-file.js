const fs = require ("fs")

fs.writeFileSync("./output/temporary.txt", "this is temporary file")
console.log("file created")
if(fs.existsSync("./output/temporary.txt")){
    console.log("file exits")

    fs.unlinkSync("./output/temporary.txt")
    console.log("file deleted")
}

try{
    fs.unlinkSync("./output/temporary.txt")

} catch (error){
console.log("Error:", error.message)
}


// async 
fs.writeFile("./output/temporary2.txt", "this is temporary file" ,(err) =>{
    if(err) return console.error(err.message)
        console.log("another temp file created")

      fs.unlink("./output/temporary2.txt", (err)=>{
        if(err){
            console.error("ERROR:",err.message)
        }
        else{
                console.log("file2 deleted")

        }
      })
})
