import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './react-project/components/HomeScreen'
import PlayerScreen from './react-project/components/PlayerScreen'

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Player: PlayerScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return (<AppContainer />)
    }
}