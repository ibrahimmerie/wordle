const words: string[] = [ 'APPLE', 'PLEAS', 'THEME', 'SANDY', 'RAINY', 'PHASE', 
  'SPEAR', 'SPEND', 'SPELL', 'BEGIN', 'MELON', 'IRATE', 'SOUND', 'STEED', 'SCOUT',
  'INLET', 'CLASH', 'LEAKY', 'DRAIN', 'WHISK', 'FOUND', 'THIGH', 'REIGN', 'BREAD',
  'TEMPT', 'THYME', 'TRUCE', 'TWICE', 'GLOAT', 'APRON' ]

const getWord = (): string => { 
  let index: number = Math.ceil(Math.random().toFixed(2) * 100)

  while (index > words.length - 1) {
    index = Math.ceil(Math.random().toFixed(2) * 100)
  }

  return words[index]
}

export const solution: string = getWord()