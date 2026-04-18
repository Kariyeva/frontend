# Lab 11.2 — ProductApp

**Student Name:** [Aiym]  
**Student ID:** [12345]  
**Date:** April 18, 2026

## How to run

From this folder (`Lab_11/task2`):

```bash
npm install
npx expo start
```

Use Expo Go or a simulator to open the app, then browse the catalog and tap a product for details.

## React Navigation setup

This app uses **React Navigation** with a **native stack**:

- `NavigationContainer` wraps the tree and holds navigation state.
- `SafeAreaProvider` (from `react-native-safe-area-context`) supplies safe-area insets for headers and screens.
- `createNativeStackNavigator` registers two routes: **ProductList** (catalog) and **ProductDetail** (detail with `product` in params).
- `screenOptions` styles the stack header (blue background, white tint, bold titles). The detail screen title is driven by `route.params.product.name`.

TypeScript types live in `App.tsx` as `RootStackParamList`, so `navigate` and `route.params` stay type-safe end to end.

## FlatList vs ScrollView

- **`ScrollView`** renders **all** children at once. It is ideal for short, static content (for example the product detail page where fields are known and limited).
- **`FlatList`** **virtualizes** rows: only items near the viewport are mounted. For a growing catalog this saves memory and keeps scrolling smooth.

The catalog uses **`FlatList`** so each product row is created on demand instead of laying out the entire list up front.

## Platform-specific code

`ProductDetailScreen` uses `Platform.OS` and `Platform.Version` in a small info panel so you can see the runtime environment.

The **Add to Cart** button uses `Platform.select` so **iOS** gets the specified shadow (color, offset, opacity, radius) while **Android** uses **elevation** for a similar lifted look—each platform uses the styling API it supports best.
