import { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, // Makes content scrollable
  TextInput, // Allows user to type text
  Switch,    // Toggle boolean values
  TouchableOpacity, // Custom button with touch feedback
  Alert      // Native popup messages
} from 'react-native';

export default function ProfileScreen() {
  const [isSubscribed, setIsSubscribed] = useState(false); // Switch state
  const [name, setName] = useState(''); // Text input for name
  const [email, setEmail] = useState(''); // Text input for email
  const [password, setPassword] = useState(''); // Text input for password

  // Called when Save button is pressed
  const handleSave = () => {
    Alert.alert(
      'Profile Saved', 
      `Name: ${name}\nEmail: ${email}\nSubscribed: ${isSubscribed ? 'ON' : 'OFF'}\nPassword: ${password ? '*****' : ''}`
    );
    // Alert: Shows native popup with title and message
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* ScrollView allows content to scroll if it exceeds screen */}

      <Text style={styles.heading}>Profile</Text>

      <Image source={require('../assets/icon.png')} style={styles.avatar} />

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      {/* TextInput: User can type their name */}

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {/* TextInput: User can type their email */}

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {/* TextInput: Password input hides text */}

      <View style={styles.switchContainer}>
        <Text>Subscribe to newsletter</Text>
        <Switch 
          value={isSubscribed} 
          onValueChange={setIsSubscribed} 
        />
        {/* Switch: Toggle ON/OFF */}
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save Profile</Text>
      </TouchableOpacity>
      {/* TouchableOpacity: Custom button with touch feedback */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    padding: 20, 
    backgroundColor: '#f5f5f5', 
    alignItems: 'center' 
  },
  heading: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  input: { 
    width: '100%', 
    padding: 10, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    marginBottom: 20 
  },
  switchContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    marginBottom: 20, 
    alignItems: 'center' 
  },
  saveButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 8 },
  saveText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});
