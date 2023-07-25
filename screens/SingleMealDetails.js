import React, {useLayoutEffect, useContext} from 'react'
import { Text, Image, StyleSheet, ScrollView, View, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MEALS } from '../data/dummyData'
import MealDetails from '../components/MealDetails'
import List from '../components/SingleMealDetails/List'
import IconButton from '../components/IconButton'
import { FavoritesContext } from '../context/favorites'


const SingleMealDetails = () => {
    const navigation = useNavigation();
    const {params} = useRoute();
    const favoritesCtx = useContext(FavoritesContext);
    const meal = MEALS.find(meal => meal.id === params.id)

    const isFavorite = favoritesCtx.ids.includes(params.id);

    const handleOnPress = () => {
        if(isFavorite){
            favoritesCtx.removeFavorite(params.id);
            Alert.alert('Removed from My Favorites!', '', [{text: 'Ok'}]);
        }else{
            favoritesCtx.addFavorite(params.id);
            Alert.alert('added to My Favorites!', '', [{text: 'Ok'}]);
        }
    };

    useLayoutEffect(() => {

        navigation.setOptions({
            title: meal.title,
            headerRight: () => <IconButton onPress={handleOnPress} iconiconsIcon={isFavorite ? 'star' : 'star-outline'}/>
        });
    },[params, navigation, isFavorite]);

    return (
        <ScrollView>
            <Image source={{uri:meal.imageUrl}} style={styles.image}/>
            <MealDetails 
                duration={meal.duration} 
                affordability={meal.affordability} 
                complexity={meal.complexity} 
                textStyle={styles.mealDetails}
            />
            <View style={styles.content}>                
                <Text style={styles.subtitle}>Ingredients</Text>
                <List items={meal.ingredients}/>
                <Text style={styles.subtitle}>Steps</Text>
                <List items={meal.steps}/>
            </View>    
        </ScrollView>
    )
}

export default SingleMealDetails

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height:350
    },
    mealDetails: {
        color: 'white',
        marginBottom: 24
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 4,
        padding: 6,
        textAlign: 'center',
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginHorizontal: 24
    },
    content: {
        marginHorizontal: '10%',
        maxWidth: '80%',
        marginBottom: 36,
    }
})