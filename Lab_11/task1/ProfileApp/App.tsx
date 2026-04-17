import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>My Profile</Text>

        <ProfileCard
          name="Assel Kakenova"
          role="Student"
          avatar="https://via.placeholder.com/100"
          bio="I am learning React Native and building my first mobile application with Expo and TypeScript."
        />

        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f4f7',
  },
  container: {
    paddingVertical: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 8,
  },
});