import React from 'react'
import { CATEGORIES } from '../data/dummyData'
import { FlatList } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'

const Categories = (props) => {
  const handleOnPress = () => {
    props.navigation.navigate('MealOverview')
  }

  return  (
  <FlatList 
    data={CATEGORIES} 
    keyExtractor={(item) => item.id}
    renderItem={({item}) => {
      return <CategoryGridTile title={item.title} color={item.color} onPress={handleOnPress}/>
    }}
    numColumns={2}
  />
  )
}

export default Categories
