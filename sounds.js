export function Sounds({
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
}) {

   /* const soundButtonsBg = {
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
      } */

      
      const forestSound = {
         background: btnSoundForest,
         svg: svgForest,
         volumeBar: volForest,
         music: soundForest,
         isPlaying: false,

         select() {
            resetCards()
            toggleCardColor(this)
            volumeControl(this)
         }
      }

      const rainSound = {
         background: btnSoundRain,
         svg: svgRain,
         volumeBar: volRain,
         music: soundRain,
         isPlaying: false,

         select() {
            resetCards(this)
            toggleCardColor(this)
            volumeControl(this)
         }         
      }

      const coffeeShopSound = {
         background: btnSoundCoffeeShop,
         svg: svgCoffeeShop,
         volumeBar: volCoffeeShop,
         music: soundCoffeeShop,
         isPlaying: false,

         select() {
            resetCards(this)
            toggleCardColor(this)
            volumeControl(this)
         }
      }

      const fireSound = {
         background: btnSoundFire,
         svg: svgFire,
         volumeBar: volFire,
         music: soundFire,
         isPlaying: false,

         select() {
            resetCards(this)
            toggleCardColor(this)
            volumeControl(this)
         }
      }

      const soundCollection = [forestSound, rainSound, coffeeShopSound, fireSound]

     function playForest() {
         togglePlay(forestSound)
      }

     function playRain() {
        togglePlay(rainSound)
     }

     function playCoffeeShop() {
        togglePlay(coffeeShopSound)
     }

     function playFire() {
        togglePlay(fireSound)
     }

   
   function togglePlay(sound) {
   if (sound.isPlaying === false) {
      sound.select()
      sound.music.play()
      sound.isPlaying = true
   } else {
      sound.music.pause()
      sound.isPlaying = false
      sound.select()
      }
   }

   function setVolume(sound, value) {
      sound.music.volume = value / 100
   }

   function volumeControl(sound) {
      sound.volumeBar.oninput = () => setVolume(sound, sound.volumeBar.value)
      sound.volumeBar.onchange = () => setVolume(sound, sound.volumeBar.value)
   }

   function toggleCardColor(sound) {
      sound.background.classList.toggle('blue-bg')
      sound.svg.classList.toggle('select-svg-volume')
      sound.volumeBar.classList.toggle('select-svg-volume')
      sound.volumeBar.classList.toggle('vol-bg')
   }

   function resetCards() {
      soundCollection.forEach(element => {
         if (element.isPlaying === true) {
            element.music.pause()
            element.music.pause()
            element.isPlaying = false
            element.select()
         }
      })
   }
   

     return {
        playForest,
        playRain,
        playCoffeeShop,
        playFire,
        resetCards,
        volumeControl,
     }
}