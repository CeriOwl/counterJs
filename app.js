let numberCounter = parseInt(document.getElementById("counter-number").innerHTML);

const counterNumber = document.getElementById("counter-number")

const increaseButton = document.getElementById("button-increase")
increaseButton.addEventListener("click", async () => {
    numberCounter++
    counterNumber.style.animationName = "FadeIn"
    counterNumber.style.animationDuration = "700ms"
    counterNumber.innerHTML = `${numberCounter}`
    await sleep(300)
    counterNumber.style.animationName = null
    counterNumber.style.animationDuration = null
})

const decreaseButton = document.getElementById("button-decrease")
decreaseButton.addEventListener("click", async () => {
    if(numberCounter > 0){
        numberCounter--
        counterNumber.style.animationName = "FadeIn"
        counterNumber.style.animationDuration = "700ms"
        counterNumber.innerHTML = `${numberCounter}`
        await sleep(300)
        counterNumber.style.animationName = null
        counterNumber.style.animationDuration = null
    }
})

const resetButton = document.getElementById("button-reset")
resetButton.addEventListener("click", async () => {
    if(numberCounter > 0){
        numberCounter = 0
        counterNumber.style.animationName = "FadeIn"
        counterNumber.style.animationDuration = "700ms"
        counterNumber.innerHTML = `${numberCounter}`
        await sleep(300)
        counterNumber.style.animationName = null
        counterNumber.style.animationDuration = null
    }
})

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}