import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { View, FlatList, StyleSheet } from 'react-native'
import SingleMeal from '../components/SingleMeal'
import { MEALS, CATEGORIES } from '../data/dummyData'

const MealOverview = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const {categoryId} = route.params;
  const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;
  navigation.setOptions({
    title: categoryTitle
  });

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