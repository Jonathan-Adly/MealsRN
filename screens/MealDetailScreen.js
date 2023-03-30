

import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { IconButton } from '../components/iconButton';
import { MEALS } from '../data/dummy_data';
import { MealDetails } from '../components/MealDetails';
import { Subtitle } from '../components/MealDetail/Subtitle';
import { List } from '../components/MealDetail/List';
import { useLayoutEffect, useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';

export const MealDetailScreen = ({ route, navigation }) => {
    const id = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === id);

    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealIsFavorite = favoriteMealsCtx.ids.includes(id);

    function changeFavoriteStatus() {
        if (mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(id);
        } else {
            favoriteMealsCtx.addFavorite(id);
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color="white"
                    onPress={changeFavoriteStatus} />
            }
        });
    }, [navigation, mealIsFavorite]);


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