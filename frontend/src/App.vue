<template>
  <router-view /> <!-- Компонент для отображения текущего маршрута -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'; // Импортируем функцию для определения компонента

export default defineComponent({
  name: 'App', // Имя компонента
});
</script>

<style>
/* Добавьте глобальные стили здесь */
</style>