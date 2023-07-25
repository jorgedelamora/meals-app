import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import MealDetails from '../MealDetails';

const SingleMeal = ({title, uri, duration, affordability, complexity, onPress}) => {

    const handleOnPress = () => {
       onPress && onPress();
    }

  return (
    <View style={styles.container}>
        <Pressable 
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => pressed ? styles.pressed : null}
            onPress={handleOnPress}
        >
            <View>
                <Image source={{uri}} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
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
    pressed: {
        opacity: 0.5
    }
})