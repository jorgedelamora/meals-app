import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummyData'

const MealOverview = () => {
  return (
    <View style={styles.container}>
      <Text>Meals Overview</Text>
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