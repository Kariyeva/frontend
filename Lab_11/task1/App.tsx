import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ContactSection } from './src/components/ContactSection';
import { ProfileCard } from './src/components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProfileCard
          name="John Doe"
          role="Senior Developer"
          bio="Passionate developer with 5+ years experience building mobile apps."
        />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingBottom: 24,
  },
});
