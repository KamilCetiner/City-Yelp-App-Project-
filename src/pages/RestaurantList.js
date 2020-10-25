import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { RestaurantItem } from '../components';

const RestaurantList = (props) => {

    const [restaurantList, setRestarantList] = useState([])
    const { selectedCity } = props.route.params

    const fetchRestaurants = () => {
        axios.get(
            'http://opentable.herokuapp.com/api/restaurants',
            {
                params: {
                    city: selectedCity
                }
            })
            .then(response =>{
                setRestarantList(response.data.restaurants)
                
            })
            
        }

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const renderRestaurants= ({item}) => {
        return(
            <RestaurantItem
            restaurant={item}
            />
        )
    }

    return (
        <SafeAreaView>
            <View>
                <Text>{selectedCity}</Text>
            </View>

            <FlatList
            keyExtractor={(_, index) => index.toString()}

            data={restaurantList}
            renderItem={renderRestaurants}

            />
        </SafeAreaView>
    )
}

export { RestaurantList }