<template>
  <div class="flex border-b-[1px] border-[#3a3a3c] w-full p-[5px] justify-center h-[65px] items-center">
    <strong class="text-3xl"> Wordle </strong>
  </div>

  <div class="game-container">
    <div class="flex flex-grow m-0 justify-center items-center py-2">
      <Board v-model:clicked-key="clickedKey" />
    </div>

    <div class="flex m-0 items-center flex-col gap-1 pb-3">
      <Keyboard @key-press="onKeyPress" />
    </div>
  </div>

  <InfoMsg />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Board from './components/Board.vue'
import InfoMsg from './components/InfoMsg.vue'
import Keyboard from './components/Keyboard.vue'

const clickedKey = ref<string>('')

const onKeyPress = (key: string) => {
  clickedKey.value = key
}
</script>

<style scoped>
.game-container {
  /* width: 100%; */
  margin: 0 auto;
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
