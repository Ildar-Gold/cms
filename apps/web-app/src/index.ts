import { formatDate, capitalize } from '@cms/utils';
import { Button, Card } from '@cms/ui-components';

// Пример использования
console.log(`Сегодня: ${formatDate(new Date())}`);
console.log(`Приветствие: ${capitalize('привет, мир!')}`);
console.log(`Компоненты: ${Button.name}, ${Card.name}`);