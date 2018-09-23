import React from 'react'
import { View } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import HomeScreen from '../Container/HomeScreen'
import HomeDetailScreen from '../Container/HomeDetailScreen'

import styles from './Styles/NavigationStyles'
import { Colors } from '../Themes';

const drawerStack = createStackNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: { title: 'HOME' } },
  HomeDetailScreen: { screen: HomeDetailScreen},
}, {
    headerMode: 'screen',
  })

export default drawerStack
