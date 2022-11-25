<template>
  <div class="grid grid-cols-10 gap-2">
    <div class="key" @click="onClick('Q')" :style="keyBoardStyle['Q']">Q</div>
    <div class="key" @click="onClick('W')" :style="keyBoardStyle['W']">W</div>
    <div class="key" @click="onClick('E')" :style="keyBoardStyle['E']">E</div>
    <div class="key" @click="onClick('R')" :style="keyBoardStyle['R']">R</div>
    <div class="key" @click="onClick('T')" :style="keyBoardStyle['T']">T</div>
    <div class="key" @click="onClick('Y')" :style="keyBoardStyle['Y']">Y</div>
    <div class="key" @click="onClick('U')" :style="keyBoardStyle['U']">U</div>
    <div class="key" @click="onClick('I')" :style="keyBoardStyle['I']">I</div>
    <div class="key" @click="onClick('O')" :style="keyBoardStyle['O']">O</div>
    <div class="key" @click="onClick('P')" :style="keyBoardStyle['P']">P</div>
  </div>
  <div class="grid grid-cols-9 px-[3px] gap-2">
    <div class="key" @click="onClick('A')" :style="keyBoardStyle['A']">A</div>
    <div class="key" @click="onClick('S')" :style="keyBoardStyle['S']">S</div>
    <div class="key" @click="onClick('D')" :style="keyBoardStyle['D']">D</div>
    <div class="key" @click="onClick('F')" :style="keyBoardStyle['F']">F</div>
    <div class="key" @click="onClick('G')" :style="keyBoardStyle['G']">G</div>
    <div class="key" @click="onClick('H')" :style="keyBoardStyle['H']">H</div>
    <div class="key" @click="onClick('J')" :style="keyBoardStyle['J']">J</div>
    <div class="key" @click="onClick('K')" :style="keyBoardStyle['K']">K</div>
    <div class="key" @click="onClick('L')" :style="keyBoardStyle['L']">L</div>
  </div>
  <div class="grid grid-cols-11 gap-2">
    <div class="col-span-2">
      <div class="large-key float-right" @click="onClick('ENTER')" :style="{ backgroundColor: lightGrey }"> ENTER </div>
    </div>
    <div class="key" @click="onClick('Z')" :style="keyBoardStyle['Z']">Z</div>
    <div class="key" @click="onClick('X')" :style="keyBoardStyle['X']">X</div>
    <div class="key" @click="onClick('C')" :style="keyBoardStyle['C']">C</div>
    <div class="key" @click="onClick('V')" :style="keyBoardStyle['V']">V</div>
    <div class="key" @click="onClick('B')" :style="keyBoardStyle['B']">B</div>
    <div class="key" @click="onClick('N')" :style="keyBoardStyle['N']">N</div>
    <div class="key" @click="onClick('M')" :style="keyBoardStyle['M']">M</div>
    <div class="col-span-2">
      <div class="large-key p-4 float-left" @click="onClick('BACKSPACE')" :style="{ backgroundColor: lightGrey }">
        <Delete />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { darkGrey, lightGrey, yellow, green, guessedLetters } from '../utils'
import Delete from '../components/icons/Delete.vue'

const emits = defineEmits(['key-press'])

const onClick = (key: string) => {
  emits('key-press', key)
}

const getColor = (letter: string) => {
  const count = guessedLetters.value.filter(x => x === letter).length

  if (count === 3) { return green }

  if (count === 2) { return yellow }

  if (count === 1) { return darkGrey }

  if (count === 0) { return lightGrey }
}

const keyBoardStyle = computed(() => {
  return {
    Q: { backgroundColor: getColor('Q') },
    W: { backgroundColor: getColor('W') },
    E: { backgroundColor: getColor('E') },
    R: { backgroundColor: getColor('R') },
    T: { backgroundColor: getColor('T') },
    Y: { backgroundColor: getColor('Y') },
    U: { backgroundColor: getColor('U') },
    I: { backgroundColor: getColor('I') },
    O: { backgroundColor: getColor('O') },
    P: { backgroundColor: getColor('P') },
    A: { backgroundColor: getColor('A') },
    S: { backgroundColor: getColor('S') },
    D: { backgroundColor: getColor('D') },
    F: { backgroundColor: getColor('F') },
    G: { backgroundColor: getColor('G') },
    H: { backgroundColor: getColor('H') },
    J: { backgroundColor: getColor('J') },
    K: { backgroundColor: getColor('K') },
    L: { backgroundColor: getColor('L') },
    Z: { backgroundColor: getColor('Z') },
    X: { backgroundColor: getColor('X') },
    C: { backgroundColor: getColor('C') },
    V: { backgroundColor: getColor('V') },
    B: { backgroundColor: getColor('B') },
    N: { backgroundColor: getColor('N') },
    M: { backgroundColor: getColor('M') }
  }
})

</script>

<style scoped>
.key {
  width: 40px;
  height: 60px;
  display: flex;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.key:hover {
  cursor: pointer;
}

.large-key {
  width: 60px;
  height: 60px;
  display: flex;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.large-key:hover {
  cursor: pointer;
}
</style>
