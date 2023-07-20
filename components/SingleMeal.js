import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'

const SingleMeal = ({title, uri, duration, affordability, complexity}) => {
  return (
    <View style={styles.container}>
        <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => pressed ? styles.pressed : null} >
            <View>
                <Image source={{uri}} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailsItem}>{duration} min</Text>
                <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default SingleMeal

const styles = StyleSheet.create({
    container: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 8,

    },
    image:{
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 8,
    },
    detailsItem: {
        fontSize: 12
    },
    pressed: {
        opacity: 0.5
    }
})