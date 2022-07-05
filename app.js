let numberCounter = parseInt(document.getElementById("counter-number").innerHTML);

const counterNumber = document.getElementById("counter-number")

const increaseButton = document.getElementById("button-increase")
increaseButton.addEventListener("click", () => {
    numberCounter++
    counterNumber.innerHTML = `${numberCounter}`
})

const decreaseButton = document.getElementById("button-decrease")
decreaseButton.addEventListener("click", () => {
    if(numberCounter > 0){
        numberCounter--
        counterNumber.innerHTML = `${numberCounter}`
    }
})

const resetButton = document.getElementById("button-reset")
resetButton.addEventListener("click", () => {
    if(numberCounter > 0){
        numberCounter = 0
        counterNumber.innerHTML = `${numberCounter}`
    }
})