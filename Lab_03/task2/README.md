# Lab 3.2 — Data Loading

В этом задании я сделал компонент UserProfile, который загружает данные пользователя с JSONPlaceholder через useEffect. Реализованы состояния loading, error и user. Запрос отменяется через AbortController в cleanup-функции, чтобы не было обновления state после размонтирования. Также есть кнопка Refresh для загрузки случайного пользователя и родительский компонент, который меняет userId (из-за этого useEffect срабатывает заново, потому что userId указан в dependency array).

API: https://jsonplaceholder.typicode.com/users/:id

Запуск:
npm install
npm run dev
