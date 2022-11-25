<template>
  <Modal v-model="show" :size="'lg'">
    <strong class="text-2xl block">How To Play</strong>

    <div class="p-2">
      <span class="text-lg">Guess the word in 6 tries.</span>
      <ul class="list-disc ml-4">
        <li>Each guess must be a valid 5-letter word.</li>
        <li>The color of the tiles change to show how close your guess was to the word.</li>
      </ul>
    </div>

    <strong class="text-xl block">Examples</strong>

    <div class="p-2">
      <div class="flex justify-center">
        <DummyRow word="THERE" :is-entered="flip" :color="green" :flip-index="0" />
      </div>
      <div class="py-2">
        <strong>T</strong> is the letter in the correct spot.
      </div>
    </div>

    <div class="p-2">
      <div class="flex justify-center">
        <DummyRow word="SOUND" :is-entered="flip" :color="yellow" :flip-index="1" />
      </div>
      <div class="py-2">
        <strong>O</strong> is in the word but in the wrong spot.
      </div>
    </div>

    <div class="p-2">
      <div class="flex justify-center">
        <DummyRow word="TREAT" :is-entered="flip" :color="grey" :flip-index="2" />
      </div>
      <div class="py-2">
        <strong>E</strong> is not in the word.
      </div>
    </div>

  </Modal>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { grey, yellow, green } from '../utils'
import Modal from './Modal.vue'
import DummyRow from './DummyRow.vue'

const props = defineProps<{ modelValue: boolean }>()

const emits = defineEmits(['update:modelValue'])

const show = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  }
})

watch(() => show.value, (val) => {
  setTimeout(() => flip.value = val, 1000)
})

const flip = ref<boolean>(false)

</script>