<template>
  <button
    @click="handleClick"
    :class="props.btnClass"
  >
    {{ props.text }}
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface UiButtonProps {
  text: string;
  btnClass?: string;
}

const props = defineProps<UiButtonProps>();
const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = (): void => {
  emit('click');
};
</script>

<style scoped>
button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>