import React, {useContext} from 'react'
import { View, StyleSheet, Text} from 'react-native'
import MealsList from '../components/MealsList/MealsList'
import { FavoritesContext } from '../context/favorites'
import { MEALS } from '../data/dummyData'

const Favorites = () => {

  const favoritesCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => {
    return favoritesCtx.ids.includes(meal.id);
  });

  if(!favoriteMeals.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          You don't have any Favorites Yet...
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MealsList meals={favoriteMeals} />
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 16
  },
  title:{
      color: '#e2b497',
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 4,
      padding: 6,
      textAlign: 'center',
      borderBottomColor: '#e2b497',
      borderBottomWidth: 2,
      marginHorizontal: 24
  }
});