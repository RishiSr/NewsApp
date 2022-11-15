import { Image, ImageBackground, Linking, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Newsdata } from '../APIcontext';
const Description = ({ route, navigation }) => {
    const { savednews, setsavednews } = useContext(Newsdata)
    const [flexvarible, setflexvarible] = useState(1)
    const data = route.params.data;

    const [heartcolor, setheartcolor] = useState("black");


    useEffect(() => {

        if (data.liked == 1) {
            setheartcolor("red");

            // showdata();
        }


    }, [data.liked])

    const changeliked = async () => {

        if (data.liked == 1) {
            setheartcolor("black")
            data.liked = 0;
            removethenews();

        }
        else {
            setheartcolor("red")
            data.liked = 1;
            setdatainstorage();

        }
    }
    const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
            if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                    return;
                }
                seen.add(value);
            }
            return value;
        };
    };


    const setdatainstorage = async () => {
        // await AsyncStorage.removeItem("SavedNews");

        const saveddata = await AsyncStorage.getItem("SavedNews");



        if (saveddata == null) {
            const arr = [];
            data.index = 0;
            arr.push(data)
            await AsyncStorage.setItem("SavedNews", JSON.stringify(arr));
            AsyncStorage.getItem("SavedNews").then((res) => {
                console.log(res);
                setsavednews(res)
            })
        }
        else {

            const arr = JSON.parse(saveddata)
            data.index = arr.length;
            arr.push(data)
            await AsyncStorage.removeItem("SavedNews");

            await AsyncStorage.setItem("SavedNews", JSON.stringify(arr));
            AsyncStorage.getItem("SavedNews").then((res) => {
                console.log(res);
                setsavednews(res)
            })


        }

    }

    const removethenews = async () => {
        const saveddata = await AsyncStorage.getItem("SavedNews");
        const arr = JSON.parse(saveddata);
        arr.splice(data.index, 1);
        await AsyncStorage.removeItem("SavedNews");
        await AsyncStorage.setItem("SavedNews", JSON.stringify(arr));
        AsyncStorage.getItem("SavedNews").then((res) => {
            console.log(res);
            setsavednews(res)
        })


    }
    const showdata = async () => {
        try {

            const saveddata = await AsyncStorage.getItem("SavedNews");

            const result = JSON.parse(saveddata);
            console.log(result)

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.maindiv} >


            <ImageBackground source={{ uri: data.urlToImage }} style={{ flex: 1, justifyContent: 'center', width: "100%", overlayColor: "Red" }} >

                <View style={styles.child} >
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()} style={{ width: 'contain' }} >

                        <View style={styles.backdiv} >
                            <Image source={require('../assets/icons8-left-arrow-100.png')} style={{ height: "70%", width: '8%' }} />
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={styles.heading} >
                        {data.title}
                    </Text>
                </View>
            </ImageBackground>

            <View style={{
                flex: flexvarible,
                position: 'relative',
                bottom: 40,
                backgroundColor: "white",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,


            }} >
                <TouchableWithoutFeedback activeOpacity={false} onPress={() => setflexvarible(1)} >

                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center', borderWidth: 3, height: 40, width: 90, borderRadius: 40, marginLeft: 15, marginTop: 10, backgroundColor: "black" }} ><Text style={{ color: "#ffff", fontWeight: "bold" }} >Author</Text></View>
                        <View style={{ flexDirection: "row" }} >

                            <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: 40, width: 90, borderRadius: 40, marginRight: 15, marginTop: 10, backgroundColor: "#c4bebe" }} ><Text style={{ fontWeight: "bold", fontSize: 18 }} >2h</Text></View>
                            <TouchableWithoutFeedback onPress={changeliked} >
                                <View style={{ marginTop: 14, marginRight: 12, }} >

                                    <Image style={{
                                        height: 30, width: 30,
                                        tintColor: heartcolor
                                    }} source={require('/home/rishi/Desktop/React-Native/Project2/assets/icons8-heart-60.png')} resizeMode='contain' />
                                </View>

                            </TouchableWithoutFeedback>
                        </View>

                    </View>
                </TouchableWithoutFeedback>

                <Text style={styles.description} >
                    {data.title}
                </Text>


                <Text style={styles.textcontent} >
                    {data.description}
                </Text>
                <TouchableOpacity style={{ width: 150, alignSelf: 'center', borderRadius: 10 }} onPress={() => { console.log(data.url) }}>
                    <View style={styles.gotosite} >
                        <Text style={styles.gotositetext} >Continue Reading </Text>
                    </View>
                </TouchableOpacity>
            </View>


        </View >
    )
}

export default Description

const styles = StyleSheet.create({

    maindiv: {
        flex: 1
    },
    description: {


        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20,
        fontSize: 20,
        color: "#000000",
        fontWeight: "bold",





    },
    textcontent: {
        marginTop: 10,
        margin: 10,
        fontSize: 15,
        textAlign: "justify",
        color: "black"
    },
    child: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#F5F5F5',
        paddingLeft: 8

    },
    backdiv: {
        // borderWidth: 2,
        height: 50,
        width: "100%",
        position: "absolute",
        top: 2,
        paddingLeft: 10
    },
    gotositetext: {
        fontSize: 15,

        color: "black",
    },
    gotosite: {
        borderWidth: 2,
        alignSelf: 'center',
        padding: 4, marginTop: 30,
        borderRadius: 6,
        height: 50,
        justifyContent: 'center'
    }

})