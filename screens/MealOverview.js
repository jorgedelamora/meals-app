import React from 'react'
import { useRoute } from '@react-navigation/native'
import { View, FlatList, StyleSheet } from 'react-native'
import SingleMeal from '../components/SingleMeal'
import { MEALS } from '../data/dummyData'

const MealOverview = () => {

  const route = useRoute();
  const {categoryId} = route.params;

  const mealsInThisCategory = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  const renderMeal = (itemData) => {

    const {item} = itemData;

    const SingleMealProps = {
      title: item.title,
      uri: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    };

    return <SingleMeal {...SingleMealProps}/>;
  }

  return (
    <View style={styles.container}>
      <FlatList data={mealsInThisCategory} keyExtractor={(item) => item.id} renderItem={renderMeal}/>
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