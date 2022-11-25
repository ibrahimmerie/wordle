import { ref } from 'vue'
import { gameWords, fiveLetterWords } from './words'

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getWord = (): string => {
  const index = getRandomInt(0, gameWords.length)
  return gameWords[index].toUpperCase()
}

export const isValidWord = (word: string): boolean => fiveLetterWords.includes(word.toLowerCase())

export const solution = getWord()

export const grey: string = '#475569'
export const yellow: string = '#b59f3b'
export const green: string = '#538d4e'
export const lightGrey: string = '#818384'
export const darkGrey: string = '#3a3a3c'

export const infoMsg = ref<string>('')
export const showInfoMsg = ref<boolean>(false)

export const showInfo = (msg: string) => {
  if (showInfoMsg.value) { return }

  infoMsg.value = msg
  showInfoMsg.value = true


  setTimeout(() => {
    showInfoMsg.value = false
  }, 1000)
}

export const guessedLetters = ref<string[]>([])

export const addToGuesses = (word: string) => {
  const letters = [ ...word ]

  for (let i = 0; i < word.length; i++) {
    const letter = word[i]

    const count = guessedLetters.value.filter(x => x === letter).length

    if (count === 3) { continue }

    const newGuess = []

    // First guess Count 1
    newGuess.push(letter)

    // One Hit Count 2
    if (solution.includes(letter)) {
      newGuess.push(letter)
    }

    // Two Hits Count 3
    if (solution[i] === letter) {
      newGuess.push(letter)
    }

    const delta = newGuess.length - count

    if (delta > 0) {
      guessedLetters.value.push(letter)
    }

    if (delta > 1) {
      guessedLetters.value.push(letter)
    }

    if (delta > 2) {
      guessedLetters.value.push(letter)
    }
  }
}
