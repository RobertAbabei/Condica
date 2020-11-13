import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const HomeScreen = () => {

    return (

        <View style={styles.container}>
            <Text>
                HomeScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export default HomeScreen;