<template>
  <teleport to="body">
    <transition name="modal">
      <div v-show="modelValue" ref="modal" class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
        <div class="flex items-start justify-center min-h-screen pt-24 text-center">
          <div class="bg-[#121213] rounded shadow-xl w-1/3 p-2" role="dialog" ref="modal" aria-modal="true"
            aria-labelledby="modal-headline">
            <div class="flex justify-end pr-2">
              <a href="#" class="close-btn" @click="close"> x </a>
            </div>
            <slot>Nothing to see here :\</slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps({ modelValue: { type: Boolean, default: false } })
const emits = defineEmits(['update:modelValue'])

const modal = ref<HTMLElement>()

const close = () => emits('update:modelValue', false)

</script>

<style scoped>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}

.modal-enter-active {
  transition: all 0.5s ease;
  transition-delay: 1200ms;
}

.modal-leave-active {
  transition: all 0.5s ease;
  transition-delay: 0;
}

.close-btn {
  font-size: 36px;
}

.close-btn:hover {
  text-decoration: none;
}
</style>
