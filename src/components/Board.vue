<template>
  <div class="grid grid-flow-row gap-2 p-4">
    <Row v-for="(r, i) in rows" :key="r" :word="gameState[i]" :isEntered="currentRow > i" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeMount, computed } from 'vue'
import { solution } from '../utils'
import Row from './Row.vue'

const rows = Array(6)
const currentRow = ref<number>(0)
const gameState = ref(['', '', '', '', '', ''])
const currentWord = computed(() => gameState.value[currentRow.value])

const validKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const isValidWord = () => true

const checkWord = () => {
  if (currentWord.value === solution || currentRow.value === 5) {
    window.removeEventListener('keydown', onKeyDown)
  }

  currentRow.value++
}

const onEnter = () => {
  console.log(currentWord.value)

  if (currentRow.value <= 5) {
    if (!isValidWord()) { return }
  }

  return checkWord()
}

const onKeyDown = (e: KeyboardEvent) => {
  // console.log(e.key)
  const val = e.key.toUpperCase()

  if (val === 'BACKSPACE') {
    if (currentWord.value.length > 0) {
      gameState.value[currentRow.value] = currentWord.value.slice(0, currentWord.value.length - 1)
    }
  }

  if (val === 'ENTER' && currentWord.value.length === 5) {
    return onEnter()
  }

  if (!validKeys.includes(val) || currentWord.value.length > 4) { return }

  gameState.value[currentRow.value] += val
}

onMounted(() => {
  console.log(solution)
  window.addEventListener('keydown', onKeyDown)
})

onBeforeMount(() => {
  window.removeEventListener('keydown', onKeyDown)
})

</script>

<style scoped>

</style>
