import { StatusBar } from 'react-native';
import Categories from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealOverview from './screens/MealOverview';
import SingleMealDetails from './screens/SingleMealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './screens/Favorites';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const screenOptionsStackNav = {
    headerStyle: {backgroundColor: '#351401'},
    headerTintColor:  'white',
    contentStyle: {backgroundColor: '#3f2f25'}
  }

  const screenOptionsDrawerNav = {
    ...screenOptionsStackNav,
    sceneContainerStyle: {backgroundColor: '#3f2f25'},
    drawerContentStyle: {backgroundColor: '#351401'},
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor:  '#351401',
    drawerActiveBackgroundColor: '#e4baa1'
  }

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator screenOptions={screenOptionsDrawerNav} >
        <Drawer.Screen 
          name='allCategories' 
          component={Categories} 
          options={{
            title: 'All Categories', 
            drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} /> 
          }} 
        />
        <Drawer.Screen 
          name='FavoriteMeals' 
          component={Favorites} 
          options={{
            title: 'My Favorites', 
            drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} /> 
          }} 
        />
      </Drawer.Navigator>
    )
  }

  return (
    <>
      <StatusBar style='default' />
      <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionsStackNav}>
        <Stack.Screen 
          name='categoriesMenu' 
          component={DrawerNavigator} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='MealOverview' 
          component={MealOverview}
        />
        <Stack.Screen name='singleMealDetails' component={SingleMealDetails}/>
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

