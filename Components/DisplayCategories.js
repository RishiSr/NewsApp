import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'

const DisplayCategories = ({ name, setcategories }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={setcategories(name)} >
            <Text style={styles.text} >{name}</Text>
        </TouchableOpacity>
    )
}

export default DisplayCategories

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 100,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 4, marginTop: 2,
        marginHorizontal: 5,
        borderWidth: 2,
        borderRadius: 25
    },
    text: {
        fontSize: 16,
        fontWeight: "bold"
    }
})