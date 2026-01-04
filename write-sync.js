const fs = require("fs")

const content1 ="this is a content \n nodejs is awesome "

try{
    fs.writeFileSync("./output/test-sync.txt,", content1)
    console.log("file written sync")
} catch(err){
    console.err(err.message)
}




const content2 ="this is a content asynccronous "

    fs.writeFile("./output/text-async.txt", content2, (error)=>{
        if(error){
            console.err(err.message)
        } else{
            console.log("file written asynchronously")
        }
    })
