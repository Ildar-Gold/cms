<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';
import './ui-button.scss';

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  primary: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

const buttonClass = computed(() => ({
  'btn': true,
  'btn-primary': props.primary,
}));

const handleClick = (event: Event) => {
  emit('click', event);
};
</script>

<style scoped>
@import './ui-button.scss';
</style>