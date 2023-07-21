import { Pressable, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import React from 'react'

const IconButton = ({iconiconsIcon = 'star', color = 'white', size = 24, onPress}) => {

    const handleOnPress = () => {
        onPress && onPress()
    }

  return (
    <Pressable onPress={handleOnPress} style={({pressed}) => pressed ? styles.pressed : null}>
        <Ionicons name={iconiconsIcon} size={size} color={color}/>
    </Pressable>
  )
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})