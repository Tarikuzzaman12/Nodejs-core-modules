const fs = require ("fs")

fs.writeFileSync("./output/temporary.txt", "this is temporary file")
console.log("file created")