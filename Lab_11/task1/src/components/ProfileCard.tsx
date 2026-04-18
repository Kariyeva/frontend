import { Image, StyleSheet, Text, View } from 'react-native';

const FALLBACK_AVATAR = 'https://via.placeholder.com/100';

export interface ProfileCardProps {
  name: string;
  role: string;
  avatar?: string;
  bio: string;
}

export function ProfileCard({ name, role, avatar, bio }: ProfileCardProps) {
  const avatarUri = avatar && avatar.length > 0 ? avatar : FALLBACK_AVATAR;

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: avatarUri }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 20,
    margin: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#888',
  },
});
