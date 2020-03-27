import React from 'react';
import {View, StyleSheet} from 'react-native'
import { Constants } from 'expo';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: "#000D0C",
        paddingTop: Constants.statusBarHeight,
        }
    }
)