import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'

const CategoryGridTile = ({title, color}) => {
  return (
    <View style={styles.container}>
        <Pressable>
            <View>
                <Text>{title} 1</Text>   
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
        elevation: 4,
    },
    innerContainer :{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
})