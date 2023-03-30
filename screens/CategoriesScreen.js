import { CATEGORIES } from '../data/dummy_data';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { CategoryGridTile } from '../components/CategoryGridTile';

export const CategoriesScreen = () => {

    return (

        <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => <CategoryGridTile item={item} />}
            keyExtractor={item => item.id}
            numColumns={2}
        />

    );
}
