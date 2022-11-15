import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Displaybox from '../Components/Displaybox';
import { Newsdata } from '../APIcontext';

const Allcategories = ({ articles, navigation }) => {

    const { data } = useContext(Newsdata)

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false} centerContent={true}>



                {data.length > 0 && data.map((articles, index) => {
                    return <Displaybox data={articles} navigator={navigation} />
                })}

                {/* <Displaybox> */}
            </ScrollView>

        </View>
    )
}

export default Allcategories

const styles = StyleSheet.create({})