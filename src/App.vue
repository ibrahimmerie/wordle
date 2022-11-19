<template>
  <div class="flex border-b-2 border-white w-full p-4 justify-center">
    <strong class="text-3xl"> Wordle </strong>
  </div>

  <div class="flex m-0 justify-center">
    <Board />
  </div>
</template>

<script setup lang="ts">
import Board from './components/Board.vue'
</script>
