<template>
  <div class="grid grid-cols-5 gap-2">
    <div class="bg-slate-600 w-[60px] h-[60px] text-center pt-[25%] text-lg rounded">
      {{ word[0] }}
    </div>
    <div class="bg-slate-600 w-[60px] h-[60px] text-center pt-[25%] text-lg rounded">
      {{ word[1] }}
    </div>
    <div class="bg-slate-600 w-[60px] h-[60px] text-center pt-[25%] text-lg rounded">
      {{ word[2] }}
    </div>
    <div class="bg-slate-600 w-[60px] h-[60px] text-center pt-[25%] text-lg rounded">
      {{ word[3] }}
    </div>
    <div class="bg-slate-600 w-[60px] h-[60px] text-center pt-[25%] text-lg rounded">
      {{ word[4] }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

defineProps<{ word: string }>()

</script>

<style scoped>

</style>
