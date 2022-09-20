const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Quel est votre langage préeféré ?", (langage) => {
    console.log(`Ma langage préféré c'est ${langage}`)
    readline.close()
})