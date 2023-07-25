import React from 'react'
import { FlatList } from 'react-native';
import SingleMeal from './SingleMeal';
import { useNavigation } from '@react-navigation/native';

const MealsList = ({meals = []}) => {
    const navigation = useNavigation();
    const renderMeal = (itemData) => {

        const {item} = itemData;
    
        const handleOnPress = () => {
          navigation.navigate('singleMealDetails', {id: item.id,});
        }
    
        const SingleMealProps = {
          title: item.title,
          uri: item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration: item.duration,
          onPress: handleOnPress
        };
    
        
    
        return <SingleMeal {...SingleMealProps}/>;
      }

  return <FlatList data={meals} keyExtractor={(item) => item.id} renderItem={renderMeal}/>

}


export default MealsList;