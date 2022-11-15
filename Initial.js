import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from './Screens/Discover';
import Home from './Screens/Home';
import Liked from './Screens/Allcategories';
import { Newsdata } from './APIcontext';
import Saved from './Screens/Saved';
// import Description from './Screens/Description';
const Tab = createBottomTabNavigator();
const Initial = () => {
    const { data } = useContext(Newsdata);

    return (


        <Tab.Navigator
            screenOptions={{

                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",

                    left: 10,
                    right: 10,
                    elevation: 1,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    height: 50

                }
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: "center", alignItems: "center" }} >
                            <Image source={require('/home/rishi/Desktop/React-Native/Project2/assets/icons8-home-96.png')} resizeMode='contain' style={{ height: 30, width: 30, tintColor: focused ? 'dodgerblue' : 'black' }} />
                            {/* <Text style={{ color: focused ? 'dodgerblue' : 'black', elevations: 1 }} >Home</Text> */}


                        </View>
                    )


                }}
            />
            <Tab.Screen name="Like" component={Liked} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: "center", alignItems: "center" }} >
                        <Image source={require('/home/rishi/Desktop/React-Native/Project2/assets/icons8-trending-64.png')} resizeMode='contain' style={{ height: 30, width: 30, tintColor: focused ? 'dodgerblue' : 'black' }} />
                        {/* <Text style={{ color: focused ? 'dodgerblue' : 'black', elevation: 1 }} >Trending</Text> */}


                    </View>
                )


            }} />
            <Tab.Screen name="Saved" component={Saved} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: "center", alignItems: "center" }} >
                        <Image source={require('/home/rishi/Desktop/React-Native/Project2/assets/icons8-heart-60.png')} resizeMode='contain' style={{ height: 30, width: 30, tintColor: focused ? 'dodgerblue' : 'black' }} />
                        {/* <Text style={{ color: focused ? 'dodgerblue' : 'black', elevation: 1 }} >Liked</Text> */}


                    </View>

                )

            }} />
        </Tab.Navigator>

        // <Description data={articles} />
    )
}

export default Initial

const styles = StyleSheet.create({
    parent: {
        // marginTop: statusBar.height
    }
})