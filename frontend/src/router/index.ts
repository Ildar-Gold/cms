import { createRouter, createWebHistory } from 'vue-router'; // Импортируем функции для работы с роутером
import type { RouteRecordRaw } from 'vue-router'; // Импортируем тип для работы с роутером
import Home from '../views/Home.vue'; // Импортируем компонент главной страницы
import BusinessDashboard from '../views/BusinessDashboard.vue'; // Импортируем компонент панели управления бизнесом
import ClientBooking from '../views/ClientBooking.vue'; // Импортируем компонент для записи клиентов

// Определяем маршруты нашего приложения
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/business',
    name: 'BusinessDashboard',
    component: BusinessDashboard,
  },
  {
    path: '/booking',
    name: 'ClientBooking',
    component: ClientBooking,
  },
];

// Создаем экземпляр роутера с использованием истории браузера
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // Экспортируем роутер для использования в приложении