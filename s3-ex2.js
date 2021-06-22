function randomGame() {
    let counter = 0
    let randNum = 0
    let timer = setInterval(function () {
        randNum = Math.random()
        if (randNum < 0.75) {
            counter++;
            console.log(`#${counter}: Your Random Number is ${randNum}`)
        }
        else {
            counter++;
            console.log(`#${counter}: Your Random Number was Greater than 0.75!!! FINAL NUMBER: ${randNum}`)
            console.log(`TOTAL TRIES: ${counter}`)
            clearInterval(timer)
        }
    }, 1000)
}
