<template>
  <div class="grid grid-cols-5 gap-2">
    <div v-for="(c, i) in Array(5)" :key="c" class="card" v-bind:class="{ flipme: isEntered }" :style="cardStyle[i]">
      <div v-if="!isEntered" class="card-front" :style="cardStyleFront[i]">
        {{ word[i] }}
      </div>
      <div v-else class="card-back" :style="cardStyleBack[i]">
        {{ word[i] }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { solution } from '../utils'

const props = defineProps<{ word: string, isEntered: boolean }>()

const grey = '#475569'
const yellow = '#b59f3b'
const green = '#538d4e'

const getColor = (index: number) => {
  if (solution[index] === props.word[index]) { return green }
  return solution.includes(props.word[index]) ? yellow : grey
}

const cardStyle = [
  { transitionDelay: '0', backgroundColor: grey },
  { transitionDelay: '100ms', backgroundColor: grey },
  { transitionDelay: '200ms', backgroundColor: grey },
  { transitionDelay: '300ms', backgroundColor: grey },
  { transitionDelay: '400ms', backgroundColor: grey }
]

const cardStyleFront = [
  { backgroundColor: grey },
  { backgroundColor: grey },
  { backgroundColor: grey },
  { backgroundColor: grey },
  { backgroundColor: grey }
]

const cardStyleBack = computed(() => {
  return [
    { backgroundColor: getColor(0) },
    { backgroundColor: getColor(1) },
    { backgroundColor: getColor(2) },
    { backgroundColor: getColor(3) },
    { backgroundColor: getColor(4) }
  ]
})

</script>

<style scoped>
.card {
  width: 60px;
  height: 60px;
  display: flex;
  border-radius: 2px;
  transition: transform 1s;
  transform-style: preserve-3d;
  font-size: 20px;
  font-weight: bold;
}

.card-front {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 2px;
  backface-visibility: hidden;
}

.card-back {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 2px;
  backface-visibility: hidden;
  transform: rotateX(180deg);
}

.flipme {
  transform: rotateX(180deg);
}
</style>
