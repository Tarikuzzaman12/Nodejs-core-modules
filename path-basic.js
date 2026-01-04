const path = require ("path")

console.log("current file Info:\n")
console.log("filename:", __filename)
console.log("directory:", __dirname)


console.log("\n" + "-".repeat(50) + "\n")

const filePath ="/zaman/documants/txt.pdf"
console.log("Analizing path : ",filePath, "\n")
console.log("Directory:", path.dirname(filePath))
console.log("BaseName:",path.basename(filePath))
console.log("File Extensions:",path.extname(filePath))
console.log("File Name:",path.basename(filePath,path.extname(filePath)))

console.log("\n" + "-".repeat(50) + "\n")
const parsed = path.parse(filePath)
console.log("parsed path object :",parsed)

console.log("Formated path :", path.format(parsed))

