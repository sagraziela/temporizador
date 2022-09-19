export function Controls ({
    buttonPlay,
    buttonPause,
    minutesDisplay
}) {

    let newMinutes = "05"

    function playPauseButtonToggle() {
        buttonPause.classList.toggle('hide')
        buttonPlay.classList.toggle('hide')
    }

    function increase() {
        newMinutes = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
        updateMinutes()
        console.log(newMinutes)
    }

    function decrease() {
        newMinutes = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
        updateMinutes()
    }

    function updateMinutes() {
        minutesDisplay.textContent = newMinutes
    }

    return {
        newMinutes,
        playPauseButtonToggle,
        increase,
        decrease,
        updateMinutes
    }
}