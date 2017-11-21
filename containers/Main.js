import React from 'react'
import { View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Chats from './Chats'
import Camera from './Camera'

const Tabs = TabNavigator({
    Chats: {
        screen: Chats,
        navigationOptions: {
            tabBarVisible: false,
        }
    },
    Camera: {
        screen: Camera,
        navigationOptions: {
            tabBarVisible: false,
        }
    }
})

export default StackNavigator({
    Tabs: {
        screen: Tabs
    }
}, { headerMode: 'none' })