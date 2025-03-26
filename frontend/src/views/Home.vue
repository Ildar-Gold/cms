<template>
  <div class="home">
    <h1>Добро пожаловать в CMS для записи на услуги</h1>
    <UiButton primary @click="handleClick">Записаться</UiButton>
    <router-link :to="{ name: 'BusinessDashboard' }">Вход для владельцев бизнеса</router-link>
    <router-link :to="{ name: 'ClientBooking' }">Записаться на услуги</router-link>
  </div>
</template>

<script setup lang="ts">
import UiButton from '../components/uiKit/UiButton/UiButton.vue';

// Обработчик клика по кнопке
const handleClick = () => {
  alert('Кнопка нажата!');
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>