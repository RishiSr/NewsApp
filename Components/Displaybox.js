import { Image, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const Displaybox = ({ data, navigator }) => {
    // console.log(navigator)

    return (
        <View style={{ borderWidth: 0, borderColor: "white", height: 300, width: "95%", margin: 5, marginLeft: 10, borderRadius: 10, backgroundColor: "white" }} >
            <View style={{ height: "80%", width: "100%", borderRadius: 10 }} >

                <Image source={{ uri: data.urlToImage }} style={{ height: "100%", width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            </View>

            <Text style={{ color: "#000000", paddingHorizontal: 5, textAlign: "center" }} >{data.title} </Text>
            <TouchableWithoutFeedback onPress={() => navigator.navigate('Description', { data: data })} >
                <Text style={{ color: "blue", alignSelf: "center" }} >Read More...</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Displaybox

const styles = StyleSheet.create({})