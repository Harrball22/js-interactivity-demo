const minusButton = document.getElementById('minus-btn')
const resetButton = document.getElementById('reset-btn')
const plusButton = document.getElementById('plus-btn')
const counterElement = document.getElementById('counter')
const buttonList = document.querySelectorAll('.theme-buttons')

let count = 0

plusButton.addEventListener("click", () => {
    count++
    counterElement.innerHTML = count
})

minusButton.addEventListener("click", () => {
    count--
    counterElement.innerHTML = count
})

resetButton.addEventListener("click", () => {
    count = 0
    counterElement.innerHTML = count
})

const themeButtonClickHandler = (event) => {
    let themeButton = event.target
    let theme = themeButton.innerHTML

    let body = document.querySelector("body")
    let main = document.querySelector("main")
    let allButtons = document.querySelectorAll("button")

    body.classList = ""
    main.classList = ""
    body.classList.add(theme)
    main.classList.add(theme)
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList = ""
        allButtons[i].classList.add(theme)
    }
}

for (let i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener("click", themeButtonClickHandler)
}