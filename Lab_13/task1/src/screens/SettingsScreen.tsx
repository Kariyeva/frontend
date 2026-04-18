import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type SettingsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Settings'>;
};

interface SettingRowProps {
  label: string;
  description?: string;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  onPress?: () => void;
  showArrow?: boolean;
}

function SettingRow({
  label,
  description,
  value,
  onValueChange,
  onPress,
  showArrow = false,
}: SettingRowProps) {
  const content = (
    <View style={styles.settingRow}>
      <View style={styles.settingInfo}>
        <Text style={styles.settingLabel}>{label}</Text>
        {description !== undefined && (
          <Text style={styles.settingDescription}>{description}</Text>
        )}
      </View>
      {onValueChange !== undefined && value !== undefined && (
        <Switch
          value={value === true}
          onValueChange={onValueChange}
          trackColor={{ false: '#e0e0e0', true: '#0066cc' }}
          thumbColor="#ffffff"
          ios_backgroundColor="#e0e0e0"
        />
      )}
      {showArrow === true && (
        <Text style={styles.arrow}>{'\u203A'}</Text>
      )}
    </View>
  );

  if (onPress !== undefined) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }
  return content;
}

export default function SettingsScreen({ navigation }: SettingsScreenProps) {
  const [notifications, setNotifications] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [analytics, setAnalytics] = useState<boolean>(false);

  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log Out',
          style: 'destructive',
          onPress: () => Alert.alert('Logged out successfully'),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.sectionContent}>
            <SettingRow
              label="Edit Profile"
              onPress={() => navigation.navigate('Profile', { userId: '123' })}
              showArrow={true}
            />
            <SettingRow
              label="Change Password"
              onPress={() => Alert.alert('Change Password')}
              showArrow={true}
            />
            <SettingRow
              label="Privacy"
              onPress={() => Alert.alert('Privacy Settings')}
              showArrow={true}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.sectionContent}>
            <SettingRow
              label="Push Notifications"
              description="Receive notifications about activity"
              value={notifications}
              onValueChange={(v: boolean) => setNotifications(v)}
            />
            <SettingRow
              label="Dark Mode"
              description="Use dark theme"
              value={darkMode}
              onValueChange={(v: boolean) => setDarkMode(v)}
            />
            <SettingRow
              label="Auto-play Videos"
              description="Play videos automatically"
              value={autoPlay}
              onValueChange={(v: boolean) => setAutoPlay(v)}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data</Text>
          <View style={styles.sectionContent}>
            <SettingRow
              label="Analytics"
              description="Help improve the app"
              value={analytics}
              onValueChange={(v: boolean) => setAnalytics(v)}
            />
            <SettingRow
              label="Clear Cache"
              onPress={() => Alert.alert('Cache cleared')}
              showArrow={true}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <View style={styles.sectionContent}>
            <SettingRow
              label="Help Center"
              onPress={() => Alert.alert('Help Center')}
              showArrow={true}
            />
            <SettingRow
              label="Contact Us"
              onPress={() => Alert.alert('Contact Us')}
              showArrow={true}
            />
            <SettingRow
              label="About"
              onPress={() => Alert.alert('Version 1.0.0')}
              showArrow={true}
            />
          </View>
        </View>
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 20,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  sectionContent: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingInfo: {
    flex: 1,
    marginRight: 12,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  settingDescription: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  arrow: {
    fontSize: 20,
    color: '#ccc',
  },
  logoutSection: {
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});