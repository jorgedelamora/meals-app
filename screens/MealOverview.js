import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummyData'
import MealsList from '../components/MealsList/MealsList'

const MealOverview = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const {categoryId} = route.params;

  const mealsInThisCategory = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  useLayoutEffect(() => {
    const setNavigationOptionsDynamically = () => {
      const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;
      
      navigation.setOptions({
        title: categoryTitle
      });
    }

    setNavigationOptionsDynamically();
  },[categoryId, navigation])

  return (
    <View style={styles.container}>
      <MealsList meals={mealsInThisCategory}/>
    </View>
  )
}

export default MealOverview

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16
    }
})