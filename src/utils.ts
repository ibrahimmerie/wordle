import { gameWords, fiveLetterWords } from './words'

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getWord = (): string => {
  const index = getRandomInt(0, gameWords.length)
  return gameWords[index].toUpperCase()
}

export const isValidWord = (word: string): boolean => fiveLetterWords.includes(word.toLowerCase())
