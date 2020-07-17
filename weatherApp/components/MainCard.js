import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

const MainCard = (props) => {

    const Icons = () => {

        if(props.icon === 'morning') {
            return(
                <Icon name="partly-sunny" style={styles.cardIcon} size={40} color="orange" />
            )
        }

        if(props.icon === 'afternoom') {
            return(
                <Icon name="sunny" style={styles.cardIcon} size={40} color="orange" />
            )
        }

        if(props.icon === 'nigth') {
            return(
                <Icon name="cloudy-night" style={styles.cardIcon} size={40} color="orange" />
            )
        }

    }

    const styles = StyleSheet.create({

        card: {

            backgroundColor: props.backgroundColor, // pega o backgroudColor lá direto do componente
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            margin: 10,
            width: 110,
            height: 210,

        },

        text: {

            color: '#fff',
            margin: 15,
            fontSize: 20,

        },

        cardIcon: {

            color: '#fff',
            margin: 15,

        },

    })

    return (

        <View style={styles.card}>

            <Text style={styles.text}>{props.title}</Text>
            <Icons />
            <Text style={styles.text}>{props.temperature}</Text>

        </View>

    )

}

export default MainCard