Lab 14 – Lists & User Input

 Overview

В данной лабораторной работе изучены методы оптимизированного отображения списков и обработки пользовательского ввода в React Native. Основное внимание уделено производительности (FlatList) и работе с формами.  ￼

⸻
 Task 1 – Performant FlatList (Contacts)

Что сделано:
	•	Создан тип Contact (types.ts)
	•	Реализована генерация mock-данных (100+ пользователей)
	•	Использован FlatList вместо ScrollView
	•	Оптимизация:
	•	useCallback
	•	getItemLayout
	•	keyExtractor
	•	Добавлены:
	•	Header (информация о списке)
	•	Separator между элементами
	•	Pull-to-refresh (RefreshControl)

Результат:

Создан быстрый и оптимизированный список пользователей с высокой производительностью и плавным скроллом.

⸻

Task 2 – Registration Form & Validation

Что сделано:
	•	Реализована форма регистрации:
	•	Name
	•	Email
	•	Password
	•	Добавлен KeyboardAvoidingView
	•	Реализовано скрытие клавиатуры (TouchableWithoutFeedback)
	•	Валидация:
	•	Проверка email через regex
	•	Кнопка регистрации активна только при валидных данных

Результат:

Создана адаптивная форма, корректно работающая с клавиатурой и проверкой данных.

⸻

 Использованные технологии
	•	React Native
	•	TypeScript
	•	Expo
	•	FlatList API
	•	Keyboard handling

⸻
Вывод

В ходе работы были изучены:
	•	Оптимизация списков через FlatList (virtualization)
	•	Разница между ScrollView и FlatList
	•	Работа с формами и валидацией
	•	Управление клавиатурой в мобильных приложениях

⸻

Автор

Кариева Карина