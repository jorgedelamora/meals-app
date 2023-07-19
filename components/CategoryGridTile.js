import { View, Text, Pressable, StyleSheet, Platform} from 'react-native'
import React from 'react'

const CategoryGridTile = ({title, color}) => {
  return (
    <View style={styles.container}>
        <Pressable style={({pressed}) => [styles.pressable, pressed ? styles.pressablePressed : {}]} android_ripple={{color: '#ccc'}} >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title} 1</Text>   
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    pressable: {
        flex: 1
    },
    pressablePressed: {
        opacity: 0.5
    },
    innerContainer :{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})