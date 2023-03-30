

import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { IconButton } from '../components/iconButton';
import { MEALS } from '../data/dummy_data';
import { MealDetails } from '../components/MealDetails';
import { Subtitle } from '../components/MealDetail/Subtitle';
import { List } from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';

export const MealDetailScreen = ({ route, navigation }) => {
    const id = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === id);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon="star"
                    color="white"
                    onPress={() => console.log("tap")} />
            }
        });
    }, [navigation]);


    return (

        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />


            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});