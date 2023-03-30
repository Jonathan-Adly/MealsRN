import { useLayoutEffect } from "react";
import { CATEGORIES } from "../data/dummy_data";
import { MEALS } from "../data/dummy_data";
import { Text, View, FlatList } from "react-native";
import { MealItem } from "../components/MealItem";

export const MealOverviewScreen = ({ navigation, route }) => {

    const id = route.params.categoryId;

    const meals = MEALS.filter(meal => meal.categoryIds.includes(id));

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(cat => cat.id === id).title;
        navigation.setOptions({ title: categoryTitle });
    }, [id]);

    function renderMealItem(itemData) {
        return (<MealItem item={itemData.item} />)
    }

    return (
        <FlatList
            data={meals}
            renderItem={renderMealItem}
            keyExtractor={item => item.id} />
    )
}