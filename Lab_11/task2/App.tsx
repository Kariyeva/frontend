import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import type { Product } from './src/data/products';
import { ProductDetailScreen } from './src/screens/ProductDetailScreen';
import { ProductListScreen } from './src/screens/ProductListScreen';

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0066cc',
  },
  headerTitle: {
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: styles.header,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitle,
          }}
        >
          <Stack.Screen
            name="ProductList"
            component={ProductListScreen}
            options={{ title: 'Product Catalog' }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={({ route }) => ({
              title: route.params.product.name,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
