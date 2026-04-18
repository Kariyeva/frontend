Lab 13.1 — Stack Navigation

This app uses `@react-navigation/native-stack` for hierarchical screen navigation.

The `NavigationContainer` wraps the entire app and manages navigation state.
`createNativeStackNavigator` creates a stack with three screens: Home, Profile, Settings.


The Profile screen receives `userId` as a route parameter:
```tsx
navigation.navigate('Profile', { userId: '123' })
```
Inside ProfileScreen, it is accessed via `route.params.userId`.


All navigation types are defined in `src/navigation/types.ts` using `RootStackParamList`.
This ensures type safety when navigating and reading route params.


```bash
npm install
npx expo start
```