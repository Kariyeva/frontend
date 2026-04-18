import { useCallback, useState } from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProductItem } from '../components/ProductItem';
import type { Product } from '../data/products';
import { products } from '../data/products';
import type { RootStackParamList } from '../../App';

export interface ProductListScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProductList'>;
}

export function ProductListScreen({ navigation }: ProductListScreenProps) {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const keyExtractor = useCallback((item: Product) => item.id.toString(), []);

  const handleProductPress = useCallback(
    (product: Product) => {
      navigation.navigate('ProductDetail', { product });
    },
    [navigation],
  );

  const renderItem = useCallback<ListRenderItem<Product>>(
    ({ item }) => <ProductItem product={item} onPress={handleProductPress} />,
    [handleProductPress],
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    setTimeout(() => {
      setRefreshing(false);
      setLoading(false);
    }, 1000);
  }, []);

  const ListHeaderComponent = useCallback(
    () => (
      <Text style={styles.headerTitle}>Products (5)</Text>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        extraData={loading}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  listContent: {
    paddingBottom: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: '#222',
  },
});
