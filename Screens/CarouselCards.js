import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableNativeFeedback } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCards = ({ item, index }) => {

    return (
        <TouchableNativeFeedback style={styles.container} key={index} onPress={() => console.log(item.title)} >

            <Text style={styles.text} >{item.title}</Text>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
    container: {
        borderWidth: 2,
        borderRadius: 20,
        height: 40,
        justifyContent: 'center'
    }
})

export default CarouselCards