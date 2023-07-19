import { StyleSheet, StatusBar } from 'react-native';
import Categories from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealOverview from './screens/MealOverview';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={Categories} />
        <Stack.Screen name='MealOverview' component={MealOverview} />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});

