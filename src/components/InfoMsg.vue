<template>
  <teleport to="body">
    <transition name="info">
      <div v-show="showInfoMsg" ref="info" class="fixed z-10 inset-0">
        <div class="flex items-start justify-center min-h-screen pt-[65px] text-center">
          <div class="bg-white rounded p-2 text-black font-bold" role="dialog">
            {{ infoMsg }}
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { showInfoMsg, infoMsg } from '../utils'
</script>

<style scoped>
.info-enter-from,
.info-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.info-enter-to,
.info-leave-from {
  opacity: 1;
}

.info-enter-active {
  transition: all 0.2s ease;
}

.info-leave-active {
  transition: all 0.2s ease;
}
</style>
