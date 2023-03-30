import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    Platform,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export const MealItem = ({ item }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={() => navigation.navigate('MealDetail', { mealId: item.id })}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{item.duration}m</Text>
                        <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});