import { ActivityIndicator, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Displaybox from '../Components/Displaybox';
import dataindia from '../Data/dataindia';
import Catalog from '../Components/Categories';
import DisplayCategories from '../Components/DisplayCategories';
import { BorderlessButton, RefreshControl } from 'react-native-gesture-handler';
import { getnews } from '../API/NEWS_API';
import axios from 'react-native-axios'
import Displaydiscover from './displaydiscover';
import { Newsdata } from '../APIcontext';
const Home = ({ navigation }) => {
    const articles = dataindia.articles;
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=b3de14ca631c4b448aa149dfe92c4859`).then((response) => {
            // console.log(response.data.articles);
            setdata(response.data.articles)
            // console.log(articles[0].content)
        }).catch((err) => {
            console.log(err)
        });

    }
        , [])


    const { data, setdata, categories, setcategories, country, setcountry } = useContext(Newsdata)
    const [search, setsearch] = useState("");
    const [categoriesdisplay, setcategoriesdisplay] = useState(1)
    const searchfunction = async () => {
        const datal = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=b3de14ca631c4b448aa149dfe92c4859`)
        console.log(datal.data.articles.length)
        setdata(datal.data.articles)
        // console.log(search)
        setcategoriesdisplay(0)
    }

    // console.log(categories)
    return (
        <>
            {/* // <KeyboardAvoidingView> */}

            <View style={styles.discoverview} >
                <Text style={styles.textDiscover} >
                    Discover
                </Text><Text style={styles.subtitle} >
                    News all around the world
                </Text>
                <View style={{ flexDirection: "row", marginTop: 40, justifyContent: "center" }} >

                    <TextInput
                        onChangeText={(text, event) => {
                            setsearch(text)
                        }}
                        placeholder='Search'
                        caretHidden={true} style={styles.textinput} />
                    <TouchableOpacity onPress={searchfunction} style={{ position: 'absolute', right: 30, alignSelf: 'center' }}  >

                        <Image source={require('Project2/assets/icons8-search-40.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.parent} >



                {categoriesdisplay ? <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        Catalog.map((item, index) => {
                            return (

                                <TouchableOpacity style={styles.container} onPress={() => setcategories(item.title)} >
                                    <Text style={styles.text} >{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView> : null}
                {categoriesdisplay ? <Text style={styles.textbox} >{categories}</Text> : null}
                {data.length > 0 ? <ScrollView

                    showsVerticalScrollIndicator={false} centerContent={true} style={{ marginBottom: 50 }}


                >



                    {
                        data.map((articles, index) => {
                            return <Displaydiscover data={articles} navigator={navigation} />
                        })
                    }

                    {/* <Displaybox> */}
                </ScrollView> : <ActivityIndicator size={"large"} />}

                {/* <Displaybox data={articles} navigator={navigation} /> */}
            </View >

        </>


    )
}

export default Home

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }, container: {
        height: 45,
        width: 100,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 18, marginTop: 2,
        marginHorizontal: 5,
        borderWidth: 2,
        borderRadius: 25
    },
    text: {
        fontSize: 16,
        fontWeight: "bold"
    },
    textbox: {
        margin: 2,
        fontSize: 18,

    },
    discoverview: {
        flex: 1,
        backgroundColor: "white"
    },
    textDiscover: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        marginTop: 60,
        width: "90%",
        alignSelf: "center"
    }, textinput: {
        height: 50,
        width: "90%",
        alignSelf: "center",

        borderRadius: 8,
        backgroundColor: '#DCDCDC',
        fontSize: 18
    },
    subtitle: {
        width: "90%",
        alignSelf: "center",
        fontSize: 17
    }
})