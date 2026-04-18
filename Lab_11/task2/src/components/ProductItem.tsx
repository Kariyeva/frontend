import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Product } from '../data/products';

export interface ProductItemProps {
  product: Product;
  onPress: (product: Product) => void;
}

export function ProductItem({ product, onPress }: ProductItemProps) {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => onPress(product)}
      activeOpacity={0.75}
    >
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  category: {
    fontSize: 12,
    color: '#0066cc',
    marginTop: 2,
  },
  description: {
    fontSize: 13,
    color: '#555',
    marginTop: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 8,
  },
});
