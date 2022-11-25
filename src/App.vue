<template>
  <div class="flex justify-between w-full h-[65px] p-[5px] border-b-[1px] border-[#3a3a3c]">
    <div class="flex flex-none items-center gap-2 px-2 w-20"></div>
    <div class="flex flex-1 justify-center items-center">
      <strong class="text-3xl"> Wordle </strong>
    </div>
    <div class="flex flex-none justify-around items-center gap-2 w-20">
      <div>
        <Help @click="showHelpModal = true" class="hover:cursor-pointer" />
      </div>
    </div>
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
  <HelpModal v-model="showHelpModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Board from './components/Board.vue'
import InfoMsg from './components/InfoMsg.vue'
import Help from './components/icons/Help.vue'
import Keyboard from './components/Keyboard.vue'
import HelpModal from './components/HelpModal.vue'

const clickedKey = ref<string>('')
const showHelpModal = ref<boolean>(false)

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
