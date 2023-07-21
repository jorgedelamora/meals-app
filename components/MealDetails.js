import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MealDetails = ({duration, complexity, affordability, textStyle = null}) => {
  return (
    <View style={styles.container}>
        <Text style={[styles.detailsItem, textStyle]}>{duration} min</Text>
        <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 8,
    },
    detailsItem: {
        fontSize: 12
    },
})