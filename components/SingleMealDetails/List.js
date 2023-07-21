import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const List = ({items = [], stylesText = null, stylesListItem = null}) => {
  
    return (
        <>
        {items.map((item, idx) => (
            <View key={`item-${idx}-${item}`} style={[styles.container, stylesListItem]}>
                <Text style={[styles.text, stylesText]} >{item}</Text>
            </View>
        ))}
        </> 
    );
}

export default List;

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    text: {
        color: '#351401',
        textAlign: 'center'
    }
});