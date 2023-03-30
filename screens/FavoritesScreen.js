import { FlatList } from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy_data';
import { useContext } from 'react';
import { MealItem } from '../components/mealList/MealItem';

export const FavoritesScreen = () => {
    const ids = useContext(FavoritesContext).ids;
    const meals = MEALS.filter(meal => ids.includes(meal.id));

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