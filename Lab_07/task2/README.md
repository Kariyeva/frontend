# Лабораторная работа 07 — Task 2 (Error Boundary)

## Цель
Изучить Error Boundary для обработки ошибок в React-приложении и отображения fallback UI вместо падения приложения.

## Что сделано
- Создан компонент `ErrorBoundary` (class component):
  - `getDerivedStateFromError` переводит компонент в состояние ошибки
  - отображается fallback UI
  - реализована кнопка "Try Again" для сброса ошибки
- Приложение обёрнуто в `ErrorBoundary` в `App.tsx`.
- Используются `react-router-dom`, `lazy` и `Suspense` (как в task1), но добавлена обработка ошибок через ErrorBoundary.

## Как проверить
1. Запустить проект:
   - `npm install`
   - `npm run dev`
2. Открыть `http://localhost:5173`
3. Для проверки ErrorBoundary можно временно вызвать ошибку, например в `Dashboard.tsx`:
   - `throw new Error("Test error");`
4. Перейти на `/dashboard` и убедиться, что отображается fallback UI ("Something went wrong") и кнопка "Try Again".
5. После проверки вернуть Dashboard обратно (без ошибки).

## Вывод
Error Boundary перехватывает ошибки рендеринга в дочерних компонентах и показывает понятный интерфейс вместо полного падения приложения.