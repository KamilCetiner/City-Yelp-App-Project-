import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import {CityList, RestaurantList, RestaurantDetails} from './pages'

const Router  = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Cities' component={CityList} options={{headerShown: false}}  />
                <Stack.Screen name='Restaurants' component={RestaurantList} options={{headerShown:false}}/>
                <Stack.Screen name='Details' component={RestaurantDetails} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;