# Лабораторная работа 07 — Task 1 (Lazy Loading + Suspense)

## Цель
Изучить ленивую загрузку (code splitting) в React с помощью `React.lazy()` и `Suspense`.

## Что сделано
- Настроена навигация через `react-router-dom` (страницы: Home, Dashboard, Settings, Profile).
- Страницы Dashboard, Settings и Profile подключены лениво:
  - `lazy(() => import("./pages/..."))`
- Для ленивой загрузки добавлен `Suspense` с `fallback` (сообщение загрузки).

## Как проверить
1. Запустить проект:
   - `npm install`
   - `npm run dev`
2. Открыть `http://localhost:5173`
3. Переключаться по ссылкам Home / Dashboard / Settings / Profile.
4. При переходе на страницы отображается fallback (Loading...), пока модуль подгружается.

## Вывод
Lazy loading позволяет уменьшить размер начального bundle и загружать страницы только при необходимости.