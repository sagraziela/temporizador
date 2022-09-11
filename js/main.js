import { Timer } from './timer.js';
import { Controls } from './controls.js';
import { Sounds } from './sounds.js';

let minutesDisplay = document.querySelector('#minutes')
let secondsDisplay = document.querySelector('#seconds')
const buttonPlay = document.querySelector('#play-button')
const buttonPause = document.querySelector('#pause-button')
const buttonStop = document.querySelector('#stop-button')
const btnThemeColor = document.querySelector('.theme-icons img')
const buttonIncrease = document.querySelector('#time-increase-button')
const buttonDecrease = document.querySelector('#time-decrease-button')
const btnSoundForest = document.querySelector('#forest-sound')
const clickForest = document.querySelector('#click-forest')
const btnSoundRain = document.querySelector('#rain-sound')
const clickRain = document.querySelector('#click-rain')
const btnSoundCoffeeShop = document.querySelector('#coffee-shop-sound')
const clickCoffeeShop = document.querySelector('#click-coffee-shop')
const btnSoundFire = document.querySelector('#fire-sound')
const clickFire = document.querySelector('#click-fire')

const svgForest = document.querySelector('#forest-sound svg path')
const svgRain = document.querySelector('#rain-sound svg path')
const svgCoffeeShop = document.querySelector('#coffee-shop-sound svg path')
const svgFire = document.querySelector('#fire-sound svg path')

const volForest = document.querySelector('#volForest')
const volRain = document.querySelector('#volRain')
const volCoffeeShop = document.querySelector('#volCoffeeShop')
const volFire = document.querySelector('#volFire')

const soundForest = document.querySelector('#sound-forest')
const soundRain = document.querySelector('#sound-rain')
const soundCoffeeShop = document.querySelector('#sound-coffee-shop')
const soundFire = document.querySelector('#sound-fire')

const lightThemeIcon = document.querySelector('.light-theme-icon')
const darkThemeIcon = document.querySelector('.dark-theme-icon')

const controls = Controls({
    buttonPlay,
    buttonPause,
    minutesDisplay,
    secondsDisplay
})

const timer = Timer({
    buttonPlay,
    buttonPause,
    minutesDisplay,
    secondsDisplay,
})

const sounds = Sounds({
    btnSoundForest,
    btnSoundRain,
    btnSoundCoffeeShop,
    btnSoundFire,
    svgForest,
    svgRain,
    svgCoffeeShop,
    svgFire,
    volForest,
    volRain,
    volCoffeeShop,
    volFire,
    soundForest,
    soundRain,
    soundCoffeeShop,
    soundFire
})

minutesDisplay.textContent = '03'

// timer buttons
buttonPlay.addEventListener('click', () => {
    timer.countdown()
    controls.playPauseButtonToggle()
})

buttonPause.addEventListener('click', () => {
    timer.hold()
    controls.playPauseButtonToggle()
})

buttonStop.addEventListener('click', () => {
    timer.hold()
    timer.updateTimerDisplay(controls.newMinutes, 0)
})

buttonIncrease.addEventListener('click', () => {
    controls.increase()
})

buttonDecrease.addEventListener('click', () => {
    controls.decrease()
})


// Sound Buttons


clickForest.addEventListener('click', () => {
    sounds.playForest()
})

clickRain.addEventListener('click', () => {
    sounds.playRain()
})

clickCoffeeShop.addEventListener('click', () => {
    sounds.playCoffeeShop()
})

clickFire.addEventListener('click', () => {
    sounds.playFire()
})

// Switch Theme

function toggleThemeIcon() {
    lightThemeIcon.classList.toggle('hide')
    darkThemeIcon.classList.toggle('hide')
}

lightThemeIcon.addEventListener('click', () => {
    document.querySelector('body').classList.add('dark')
    toggleThemeIcon()
})

darkThemeIcon.addEventListener('click', () => {
    document.querySelector('body').classList.remove('dark')
    toggleThemeIcon()
})


