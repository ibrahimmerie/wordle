<template>
  <div class="grid grid-cols-5 gap-1">
    <div v-for="(c, i) in Array(5)" :key="c" class="card" v-bind:class="{ flipme: isEntered && flipIndex === i }"
      :style="cardStyle[i]">
      <div v-if="flipIndex !== i || !isEntered" class="flex w-full">
        <div class="card-front" :style="cardStyleFront[i]">{{ word[i] }}</div>
      </div>
      <div v-else class="card-back" :style="cardStyleBack[i]">
        {{ word[i] }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { grey, yellow, green, darkGrey, lightGrey } from '../utils'

const props = defineProps({
  word: { type: String, required: true },
  isEntered: { type: Boolean, default: false },
  color: { type: String, required: true },
  flipIndex: { type: Number, required: true }
})

const cardStyle = computed(() => [
  { transitionDelay: '0' },
  { transitionDelay: '100ms' },
  { transitionDelay: '200ms' },
  { transitionDelay: '300ms' },
  { transitionDelay: '400ms' }
])

const cardStyleFront = computed(() => [
  { backgroundColor: 'unset', border: `2px solid ${darkGrey}` },
  { backgroundColor: 'unset', border: `2px solid ${darkGrey}` },
  { backgroundColor: 'unset', border: `2px solid ${darkGrey}` },
  { backgroundColor: 'unset', border: `2px solid ${darkGrey}` },
  { backgroundColor: 'unset', border: `2px solid ${darkGrey}` }
])

const cardStyleBack = computed(() => {
  return [
    { backgroundColor: props.color },
    { backgroundColor: props.color },
    { backgroundColor: props.color },
    { backgroundColor: props.color },
    { backgroundColor: props.color }
  ]
})

</script>

<style scoped>
.card {
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 2px;
  transition: transform 1s;
  transform-style: preserve-3d;
  font-size: 30px;
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
