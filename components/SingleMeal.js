import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'

const SingleMeal = ({title, uri, duration, affordability, complexity}) => {
  return (
    <View>
        <Pressable>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Image source={{uri}} style={styles.image} />
            </View>
            <View>
                <Text>{duration} min</Text>
                <Text>{complexity.toUpperCase()}</Text>
                <Text>{affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default SingleMeal

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
})