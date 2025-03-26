declare module '*.vue' {
    import { DefineComponent } from 'vue'; // Импортируем тип компонента из Vue
    const component: DefineComponent<{}, {}, any>;
    export default component; // Экспортируем тип компонента по умолчанию
  }