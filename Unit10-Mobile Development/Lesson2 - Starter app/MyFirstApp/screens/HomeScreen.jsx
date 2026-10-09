import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import Button from '../components/Button';
import useCounter from '../hooks/useCounter';

export default function HomeScreen() {
    const [count, increment, decrement] = useCounter();

    return (
        <View style={styles.container}>
            {/* Logo Image */}
            <Image source={require('../assets/icon.png')} style={styles.logo} />
            {/* Main Heading */}
            <Text style={styles.title}>Hello, Expo!</Text>
            {/* Counter Display */}
            <Text style={styles.count}>Count: {count}</Text>
            {/* Buttons for Counter */}
            <Button title="Increment" onPress={increment} disabled={count >=10}/>
            <Button title="Decrement" onPress={decrement} disabled={count <= 0}/>
            {/* Platform-specific Message */}
            <Text style={styles.platformText}>
                Running on {Platform.OS === 'ios' ? 'iOS' : 'Android'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 20,
    },
    count: {
        fontSize: 24,
        marginVertical: 10,
        color: '#555',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    platformText: {
        marginTop: 20,
        color: Platform.OS === 'ios' ? 'blue' : 'green',
        fontWeight: '500',
    },
});