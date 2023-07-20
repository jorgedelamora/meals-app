import { StatusBar } from 'react-native';
import Categories from './screens/Categories';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealOverview from './screens/MealOverview';

export default function App() {

  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerStyle: {backgroundColor: '#351401'},
    headerTintColor:  'white',
    contentStyle: {backgroundColor: '#3f2f25'}
  }

  return (
    <>
      <StatusBar style='default' />
      <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen 
          name='Categories' 
          component={Categories} 
          options={{title: 'All Categories'}}
        />
        <Stack.Screen 
          name='MealOverview' 
          component={MealOverview}
          //setting dynamic navigation options as prop (its being set internally in this case) 
          //
          // options={({route, navigation}) => {
          //   const {categoryId} = route?.params;
          //   return {
          //     title: categoryId
          //   }
          // }}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

