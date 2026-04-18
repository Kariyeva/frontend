import React from 'react';
import { View, Text, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GridLayout, Card } from './src/components/GridLayout';
import { ResponsiveHeader, ResponsiveContainer } from './src/components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard, StatsRow } from './src/components/AdaptiveLayout';


export default function App() {
  const stats = [
    { label: 'Просмотры', value: '1,234' },
    { label: 'Лайки', value: '456' },
    { label: 'Комментарии', value: '78' },
  ];
  
  return (
    <SafeAreaProvider>
      <ResponsiveHeader
        title="Моё приложение"
        leftAction={{ 
          icon: '☰', 
          onPress: () => Alert.alert('Меню', 'Открыть меню') 
        }}
        rightAction={{ 
          icon: '⚙️', 
          onPress: () => Alert.alert('Настройки', 'Открыть настройки') 
        }}
      />
      <ResponsiveContainer>
        <AdaptiveLayout
          header={
            <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 16 }}>
              Добро пожаловать!
            </Text>
          }
          content={
            <View>
              <StatsRow stats={stats} />
              <GridLayout columns={2} spacing={12}>
                <FeatureCard 
                  icon="📱" 
                  title="Адаптивность" 
                  description="Работает на любом устройстве" 
                  variant="primary" 
                />
                <FeatureCard 
                  icon="🎨" 
                  title="Flexbox" 
                  description="Мощная система вёрстки" 
                  variant="secondary" 
                />
                <FeatureCard 
                  icon="🔒" 
                  title="Safe Area" 
                  description="Учёт вырезов экрана" 
                  variant="accent" 
                />
                <FeatureCard 
                  icon="📊" 
                  title="Статистика" 
                  description="Гибкие компоненты" 
                  variant="primary" 
                />
              </GridLayout>
              <Card title="Дополнительная информация" subtitle="Используйте сетку и карточки">
                <Text>Это содержимое внутри карточки. Вы можете размещать здесь любые компоненты.</Text>
              </Card>
            </View>
          }
          footer={
            <Text style={{ textAlign: 'center', color: '#666' }}>
              © 2026, Ваше Имя
            </Text>
          }
        />
      </ResponsiveContainer>
    </SafeAreaProvider>
  );
}