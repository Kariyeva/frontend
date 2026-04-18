import type { RouteProp } from '@react-navigation/native';
import type { ViewStyle } from 'react-native';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { RootStackParamList } from '../../App';

export interface ProductDetailScreenProps {
  route: RouteProp<RootStackParamList, 'ProductDetail'>;
}

export function ProductDetailScreen({ route }: ProductDetailScreenProps) {
  const { product } = route.params;

  const platformAddToCartExtras = Platform.select<ViewStyle>({
    ios: styles.addToCartIos,
    android: styles.addToCartAndroid,
    default: styles.addToCartAndroid,
  });

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <Image
        source={{ uri: product.image }}
        style={styles.heroImage}
        resizeMode="cover"
      />
      <View style={styles.body}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{product.category}</Text>
        </View>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <View style={styles.divider} />
        <Text style={styles.sectionLabel}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.platformBox}>
          <Text style={styles.platformLabel}>Platform</Text>
          <Text style={styles.platformValue}>
            OS: {Platform.OS} — Version: {String(Platform.Version)}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.addToCart, platformAddToCartExtras]}
          activeOpacity={0.85}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 32,
  },
  heroImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#f0f0f0',
  },
  body: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e6f0ff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 12,
  },
  badgeText: {
    color: '#0066cc',
    fontSize: 13,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
  platformBox: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  platformLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  platformValue: {
    fontSize: 14,
    color: '#555',
  },
  addToCart: {
    marginTop: 24,
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  addToCartIos: {
    shadowColor: '#0066cc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  addToCartAndroid: {
    elevation: 4,
  },
});
