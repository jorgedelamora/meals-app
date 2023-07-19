import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CATEGORIES } from '../data/dummyData'
import CategoryGridTile from '../components/CategoryGridTile'

const Categories = () => {
  const navigation = useNavigation();

  const handleOnPress = (item) => {
    navigation.navigate('MealOverview', {
      categoryId:item.id
    })
  }

  return  (
  <FlatList 
    data={CATEGORIES} 
    keyExtractor={(item) => item.id}
    renderItem={({item}) => {
      return <CategoryGridTile title={item.title} color={item.color} onPress={() => handleOnPress(item)}/>
    }}
    numColumns={2}
  />
  )
}

export default Categories
