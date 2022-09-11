import { Controls } from './controls.js'
import { Sounds } from './sounds.js'

export function Timer({
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    newMinutes,
    btnSoundForest,
    btnSoundRain,
    btnSoundCoffeeShop,
    btnSoundFire,
    svgForest,
    svgRain,
    svgCoffeeShop,
    svgFire,
    soundForest,
    soundRain,
    soundCoffeeShop,
    soundFire
}) {

    const controls = Controls({
        buttonPlay,
        buttonPause,
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
        soundForest,
        soundRain,
        soundCoffeeShop,
        soundFire
    })
    
    let timeOut
    console.log(controls.newMinutes)

    function countdown() {
        timeOut = setTimeout(() => {

            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
        
            if (minutes > 0 && seconds == 0) {
                updateTimerDisplay(String(minutes - 1), 3)
            } else if (seconds > 0) {
                updateTimerDisplay(minutes, String(seconds - 1))
            } else {
                hold()
                updateTimerDisplay(controls.newMinutes, seconds)
                controls.playPauseButtonToggle()
                sounds.resetCards()
            }
            countdown()
        }, 1000);
    }

    function hold() {
        clearTimeout(timeOut)
    }

    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    return {
        countdown,
        hold,
        updateTimerDisplay,
    }
}