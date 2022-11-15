import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import Displaybox from '../Components/Displaybox';
import { Newsdata } from '../APIcontext';
// import { useSafeAreaFrame } from 'react-native-safe-area-context';
const Saved = ({ navigation }) => {
  const [data, setdata] = useState([])

  const { savednews } = useContext(Newsdata);
  useEffect(() => {

    setdata(JSON.parse(savednews))


  }, [savednews])

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} centerContent={true}>



        {


          data.map((articles, index) => {
            return <Displaybox data={articles} navigator={navigation} />
          })
        }




      </ScrollView>

    </View>
  )

}

export default Saved

const styles = StyleSheet.create({})