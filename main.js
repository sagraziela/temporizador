import { Timer } from './timer.js';

let minutesDisplay = document.querySelector('#minutes')
let secondsDisplay = document.querySelector('#seconds')
const buttonPlay = document.querySelector('#play-button')
const buttonPause = document.querySelector('#pause-button')
const buttonStop = document.querySelector('#stop-button')
const btnThemeColor = document.querySelector('.theme-icons img')
const buttonIncrease = document.querySelector('#time-increase-button')
const buttonDecrease = document.querySelector('#time-decrease-button')
const btnSoundForest = document.querySelector('#forest-sound')
const btnSoundRain = document.querySelector('#rain-sound')
const btnSoundCoffeeShop = document.querySelector('#coffee-shop-sound')
const btnSoundFire = document.querySelector('#fire-sound')
const svgForest = document.querySelector('#forest-sound svg path')
const svgRain = document.querySelector('#rain-sound svg path')
const svgCoffeeShop = document.querySelector('#coffee-shop-sound svg path')
const svgFire = document.querySelector('#fire-sound svg path')

let newMinutes
minutesDisplay.textContent = "05"

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause
})


function resetSoundControls() {
    btnSoundForest.style.backgroundColor = "#E1E1E6"
    btnSoundRain.style.backgroundColor = "#E1E1E6"
    btnSoundCoffeeShop.style.backgroundColor = "#E1E1E6"
    btnSoundFire.style.backgroundColor = "#E1E1E6"

    svgForest.style.fill = "#323238"
    svgRain.style.fill = "#323238"
    svgCoffeeShop.style.fill = "#323238"
    svgFire.style.fill = "#323238"
}


// timer buttons
buttonPlay.addEventListener('click', () => {
    timer.countdown()
    timer.playPauseButtonToggle()
})

buttonPause.addEventListener('click', () => {
    timer.hold()
    timer.playPauseButtonToggle()
})

buttonStop.addEventListener('click', () => {
    timer.hold()
    timer.resetTimerControls()
})

buttonIncrease.addEventListener('click', () => {
    newMinutes = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
    minutesDisplay.textContent = newMinutes
})

buttonDecrease.addEventListener('click', () => {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
})


// Sound Buttons

btnSoundForest.addEventListener('click', () => {
    resetSoundControls()
    btnSoundForest.style.backgroundColor = '#02799D';
    svgForest.style.fill = '#ffffff';
})

btnSoundRain.addEventListener('click', () => {
    resetSoundControls()
    btnSoundRain.style.backgroundColor = '#02799D';
    svgRain.style.fill = '#ffffff';
})

btnSoundCoffeeShop.addEventListener('click', () => {
    resetSoundControls()
    btnSoundCoffeeShop.style.backgroundColor = '#02799D';
    svgCoffeeShop.style.fill = '#ffffff';
})

btnSoundFire.addEventListener('click', () => {
    resetSoundControls()
    btnSoundFire.style.backgroundColor = '#02799D';
    svgFire.style.fill = '#ffffff';
})


