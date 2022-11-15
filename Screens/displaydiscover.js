import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const width1 = Dimensions.get('window').width;
const Discover = ({ data, navigator }) => {
    data.liked = 0;
    return (
        <View style={styles.parent} >
            <View style={styles.displaytab} >
                <View>

                    <Image style={styles.displayImage} source={{ uri: data.urlToImage }} />
                </View>
                <TouchableWithoutFeedback onPress={() => navigator.navigate('Description', { data: data })} >

                    <View style={styles.displaytextview} >
                        <Text textBreakStrategy='simple' style={styles.datatitle} >{data.title}</Text>
                        <View style={styles.displaytextdata} >
                            <Text textBreakStrategy='simple' style={styles.datatitledate} >{data.publishedAt}</Text>
                        </View>

                    </View>
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    displaytab: {
        // borderWidth: 2,
        flexDirection: 'row',
        width: width1,
        padding: 6,
        backgroundColor: "white",
        borderRadius: 9,
        elevation: 5

    },
    displayImage: {
        height: 80,
        width: 80,
        borderRadius: 10,
        alignSelf: 'center'
    },
    datatitle: {
        color: "black",
        fontWeight: "bold",
        textAlign: 'center',


    },
    datatitledate: {
        // color: "black",
        fontWeight: "bold",
        textAlign: 'center',


    },
    displaytextview: {
        // borderWidth: 2,
        padding: 4,


    }

})