<template>
  <div class="grid grid-cols-5 gap-1">
    <div v-for="(c, i) in Array(5)" :key="c"
      class="card flex w-[50px] md:w-[65px] h-[50px] md:h-[65px] rounded-[2px] text-[20px] md:text-[30px]"
      :class="{ flipme: isEntered }" :style="cardStyle[i]">
      <div v-if="!isEntered" class="flex w-full">
        <transition name="bounce" mode="out-in">
          <div v-if="word.length <= i" v-bind:class="{ shake: invalidWord }" class="card-front"
            :style="cardStyleFront[i]">{{ word[i] }}</div>
          <div v-else v-bind:class="{ shake: invalidWord }" class="card-front"
            :style="{ width: '100%', border: `2px solid ${lightGrey}` }">{{ word[i] }}
          </div>
        </transition>
      </div>
      <div v-else class="card-back" :style="cardStyleBack[i]">
        {{ word[i] }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, watch } from 'vue'
import { solution, grey, yellow, green, darkGrey, lightGrey, showInfo } from '../utils'

const props = defineProps<{ word: string, isEntered: boolean, invalidWord: boolean }>()

const emits = defineEmits(['update:invalidWord'])

const getColor = (index: number): string => {
  if (solution[index] === props.word[index]) { return green }
  return solution.includes(props.word[index]) ? yellow : grey
}

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
    { backgroundColor: getColor(0) },
    { backgroundColor: getColor(1) },
    { backgroundColor: getColor(2) },
    { backgroundColor: getColor(3) },
    { backgroundColor: getColor(4) }
  ]
})

watch(() => props.invalidWord, (val) => {
  const msg = props.word.length === 5 ? 'Not in word list' : 'Not enough letters'
  showInfo(msg)

  setTimeout(() => {
    emits('update:invalidWord', false)
  }, 500)
})

</script>

<style scoped>
.card {
  font-weight: bold;
  transition: transform 1s;
  transform-style: preserve-3d;
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


.bounce-enter-active {
  animation: bounce-in 0.1s;
}

.bounce-leave-active {
  animation: bounce-in 0.1s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.shake {
  animation: shake 0.25s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  20% {
    transform: translateX(-5px);
  }

  40% {
    transform: translateX(5px);
  }

  60% {
    transform: translateX(-5px);
  }

  80% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
