## Описание
В данном задании реализовано сравнение SSR и SSG в Next.js.

## Функционал
- SSR страница (Dashboard)
- Статическая страница (About)
- SSR страница с временем (About SSR)

## Страницы

### /dashboard
- Использует SSR (`getServerSideProps`)
- Данные обновляются при каждом запросе
- Отображает:
  - пользователя
  - аналитику
  - уведомления
  - текущее время

### /about
- Статическая страница (SSG)
- Не обновляется при каждом запросе

### /about-ssr
- SSR страница
- Показывает текущее время (обновляется при каждом обновлении страницы)

## Используемые технологии
- Next.js
- React
- TypeScript

## Запуск проекта

```bash
npm install
npm run dev

Открыть:

http://localhost:3000/dashboard
http://localhost:3000/about
http://localhost:3000/about-ssr
Особенности

Используется getServerSideProps

Демонстрация разницы SSR и SSG

Динамические данные на сервере



Теперь тебе осталось:

```bash
git add .
git commit -m "feat: add lab 08"
git push