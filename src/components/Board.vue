<template>
  <div class="grid grid-flow-row gap-1">
    <Row v-for="(r, i) in rows" :key="r" :word="gameState[i]" :isEntered="currentRow > i"
      v-model:invalidWord="invalidWords[i]" />
  </div>

  <Modal v-model="showModal">
    {{ gameResult }}
  </Modal>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeMount, computed, watch } from 'vue'
import { solution, isValidWord, addToGuesses } from '../utils'
import Row from './Row.vue'
import Modal from './Modal.vue'

const props = defineProps<{ clickedKey: string }>()
const emits = defineEmits(['update:clickedKey'])

const rows = Array(6)
const currentRow = ref<number>(0)
const gameState = ref<string[]>(['', '', '', '', '', ''])

const gameResult = ref<string>('')
const showModal = ref<boolean>(false)

const invalidWords = ref<boolean[]>([false, false, false, false, false, false])
const currentWord = computed(() => gameState.value[currentRow.value])

const validKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const checkWord = () => {
  if (currentWord.value === solution) {
    gameResult.value = 'Congratulations! You beat the game!'
    window.removeEventListener('keydown', onKeyDown)
    showModal.value = true
  } else if (currentRow.value === 5) {
    gameResult.value = 'You lost bubs :( the word was: ' + solution
    window.removeEventListener('keydown', onKeyDown)
    showModal.value = true
  }

  addToGuesses(currentWord.value)
  currentRow.value++
}

const deleteLastKey = () => {
  if (currentWord.value.length > 0) {
    gameState.value[currentRow.value] = currentWord.value.slice(0, currentWord.value.length - 1)
  }
}

const onEnter = () => {
  console.log(currentWord.value)

  if (currentRow.value <= 5) {
    if (!isValidWord(currentWord.value)) {
      invalidWords.value[currentRow.value] = true
      return
    }
  }

  return checkWord()
}

const onKeyDown = (e: KeyboardEvent | string) => {
  const val = typeof e === 'string' ? e : e.key.toUpperCase()

  if (val === 'BACKSPACE') {
    deleteLastKey()
  }

  if (val === 'ENTER') {
    if (currentWord.value.length === 5) {
      return onEnter()
    }

    invalidWords.value[currentRow.value] = true
  }

  if (!validKeys.includes(val) || currentWord.value.length > 4) { return }

  gameState.value[currentRow.value] += val
}

watch(() => props.clickedKey, (key) => {
  if (key === '') { return }

  if (key === 'BACKSPACE') {
    deleteLastKey()
  } else if (key === 'ENTER') {
    onEnter()
  } else {
    onKeyDown(key)
  }

  emits('update:clickedKey', '')
})

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
