import React, {useLayoutEffect} from 'react'
import { Text, Image, StyleSheet, ScrollView, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MEALS } from '../data/dummyData'
import MealDetails from '../components/MealDetails'
import List from '../components/SingleMealDetails/List'
import IconButton from '../components/IconButton'


const SingleMealDetails = () => {
    const navigation = useNavigation();
    const {params} = useRoute();
    const meal = MEALS.find(meal => meal.id === params.id)

    useLayoutEffect(() => {

        const handleOnPress = () => console.log('pressed!');

        navigation.setOptions({
            title: meal.title,
            headerRight: () => <IconButton onPress={handleOnPress} />
        });
    },[params, navigation]);

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