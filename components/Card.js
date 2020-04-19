import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return ( 
        <View style={{...styles.card, ...props.style}}>{props.children}</View> 
    )
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 0.26,
        elevation: 5, //android only
        backgroundColor: 'white',
        borderRadius: 10,
    }
})

export default Card;