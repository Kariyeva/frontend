import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isSubmitDisabled =
    email.trim().length === 0 ||
    phone.trim().length === 0 ||
    message.trim().length === 0;

  const handleSubmit = () => {
    if (isSubmitDisabled) {
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <View style={styles.section}>
      {submitted ? (
        <View style={styles.successBanner}>
          <Text style={styles.successText}>Thank you! Your message was sent.</Text>
        </View>
      ) : null}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="you@example.com"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholder="555-0100"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Message</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        value={message}
        onChangeText={setMessage}
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
        placeholder="How can we help?"
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={[styles.button, isSubmitDisabled && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={isSubmitDisabled}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 16,
    marginBottom: 32,
  },
  successBanner: {
    backgroundColor: '#d4edda',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  successText: {
    color: '#155724',
    fontSize: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  messageInput: {
    minHeight: 100,
    paddingTop: 12,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
