import React, {useState} from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet, Dimensions, Linking, Button } from 'react-native';

const RestaurantItem = (props) => {

    const isPrice = props.restaurant.price
    

    return ( 
        <TouchableOpacity style={styles.container} onPress={props.onSelect}>

            <Image
                style={styles.image}
                source={{ uri: props.restaurant.image_url }}
            />
            <Text style={styles.name}>{props.restaurant.name}</Text>

            <View>
            {

                isPrice >= 3  ?

                <Text style={styles.expensive}>$$EXPENSIVE$$</Text>
                :

                <Text style={styles.cheap}>CHEAP</Text>


                }

            </View>
                       

            <Text style={styles.name}>{props.restaurant.price}</Text>



          


                
            
        </TouchableOpacity>
    )
}

export { RestaurantItem };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bdbdbd',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    image: {
        height: Dimensions.get('window').height / 3
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'flex-end'

    }, 
    expensive:{
        color:'red',
        textAlign: 'right'
    },
    cheap:{
        color:'yellow',
        textAlign: 'right'
    }
})