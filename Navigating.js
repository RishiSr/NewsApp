import { StyleSheet, Text, View } from 'react-native'
import Initial from './Initial';
import Description from './Screens/Description';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Navigating = () => {
    return (


        <NavigationContainer>

            <Stack.Navigator initialRouteName='Initial' screenOptions={{
                headerShown: false
            }} >

                < Stack.Screen name="Initial" component={Initial} />

                < Stack.Screen name="Description" component={Description} />
            </Stack.Navigator>

        </NavigationContainer>

    )
}

export default Navigating

const styles = StyleSheet.create({})