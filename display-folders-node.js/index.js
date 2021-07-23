const fs = require("fs")

try {
  const arrayOfFiles = fs.readdirSync("C:/")
  console.log(arrayOfFiles)
} catch(e) {
  console.log(e)
}