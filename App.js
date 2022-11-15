import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Discover from './Screens/Discover';
import Home from './Screens/Home';
import Liked from './Screens/Saved';
import Description from './Screens/Description';
import Initial from './Initial';
import ContextNews from './APIcontext';
import Navigating from './Navigating';

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const App = () => {
  // const articles = {
  //   "source": {
  //     "id": null,
  //     "name": "Livemint"
  //   },
  //   "author": "Livemint",
  //   "title": "A look into some exciting features of Apple iOS 16 | Mint - Mint",
  //   "description": "Tech giant Apple has released its latest iOS 16 operating system update features which include a new lock screen with widgets, unsend and edit for iMessage, new keyboard haptics, a new Home app, and much more, according to The Verge.",
  //   "url": "https://www.livemint.com/companies/news/a-look-into-some-exciting-features-of-apple-ios-16-11663026524009.html",
  //   "urlToImage": "https://images.livemint.com/img/2022/09/13/600x338/Apple_1663030147946_1663030148066_1663030148066.jpg",
  //   "publishedAt": "2022-09-13T00:52:19Z",

  return (
    <ContextNews>

      <Navigating />
    </ContextNews>
    // <Description data={articles} />
  )
}

export default App

const styles = StyleSheet.create({
  parent: {
    // marginTop: statusBar.height
  }
})