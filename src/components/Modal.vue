<template>
  <teleport to="body">
    <transition :name="computedName">
      <div v-show="modelValue" ref="modal" class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
        <div class="flex items-start justify-center text-left min-h-screen pt-9 md:pt-18 lg:pt-24">
          <div class="bg-[#121213] rounded shadow-xl p-2" :class="computedWidth" role="dialog" ref="modal"
            aria-modal="true" aria-labelledby="modal-headline">
            <div class="w-full pr-2 pt-0">
              <a href="#" class="close-btn" @click="close"> x </a>
            </div>
            <div class="p-4">
              <slot>Nothing to see here :\</slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  delayed: { type: Boolean, default: false },
  size: { type: String, required: false }
})

const emits = defineEmits(['update:modelValue'])

const modal = ref<HTMLElement>()

const close = () => emits('update:modelValue', false)

const computedName = computed(() => props.delayed ? 'delayed' : 'modal')

const computedWidth = computed(() => {
  switch (props.size) {
    case ('sm'): {
      return 'w-6/12 md:w-4/12 lg:w-3/12'
    }
    case ('lg'): {
      return 'w-10/12 md:w-9/12 lg:w-8/12'
    }
    default: {
      return 'w-9/12 md:w-8/12 lg:w-6/12'
    }
  }
})

</script>

<style scoped>
.modal-enter-from,
.modal-leave-to,
.delayed-enter-from,
.delayed-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}

.modal-enter-active {
  transition: all 0.5s ease;
  transition-delay: 0;
}

.delayed-enter-active {
  transition: all 0.5s ease;
  transition-delay: 1200ms;
}

.modal-leave-active,
.delayed-leave-active {
  transition: all 0.5s ease;
}

.close-btn {
  float: right;
  font-size: 30px;
}

.close-btn:hover {
  text-decoration: none;
}
</style>
