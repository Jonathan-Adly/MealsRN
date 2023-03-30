import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealOverviewScreen } from './screens/MealOverviewScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MEALS } from './data/dummy_data';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesContextProvider from './store/context/favorites-context';

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Drawer.Screen name="All Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen name="Categories" component={DrawerNavigator} options={{
              headerShown: false,
            }} />

            <Stack.Screen name="MealOverview" component={MealOverviewScreen} />


            <Stack.Screen name="MealDetail" options={({ route, navigation }) => {
              const mealId = route.params.mealId;
              const selectedMeal = MEALS.find(meal => meal.id === mealId);
              return { title: selectedMeal.title }
            }} component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
