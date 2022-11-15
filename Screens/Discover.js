import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const width1 = Dimensions.get('window').width;
const Discover = () => {
    const data = {
        "source": {
            "id": null,
            "name": "NDTV News"
        },

        "author": null,
        "title": "8 Dead As Fire At Secunderabss E-Scooter  Spreads To Hotel Above - NDTV",
        "description": "Eight people were killed and several others injured after a fire broke out at a building in Telangana's Secunderabad early this morning.",
        "url": "https://www.ndtv.com/hyderabad-news/hyderabad-fire-8-killed-in-hyderabad-as-fire-breaks-out-in-electric-scooter-showroom-3339302",
        "urlToImage": "https://c.ndtvimg.com/2022-09/gg78sj4_hyderabad-fire_625x300_13_September_22.jpg",
        "publishedAt": "2022-09-13T03:40:51Z",
        "content": "Videos show some people jumping from the first and second floor to escape the fire.\r\nSecunderabad: Eight people were killed and several others injured after a massive fire, which broke out at an elec… [+2063 chars]"
    }
    return (
        <View style={styles.parent} >
            <View style={styles.displaytab} >
                <View>

                    <Image style={styles.displayImage} source={{ uri: data.urlToImage }} />
                </View>
                <TouchableWithoutFeedback onPress={() => { console.log("Rishi") }} >

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