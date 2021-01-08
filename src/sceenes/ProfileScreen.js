import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text>This is where profile picture + 
                    other stuffs like uploading picture and background image will be placed
                </Text>
            </View>

            <View style={styles.body}>
                <Text>This is where profile picture + 
                    other stuffs like uploading picture and background image will be placed
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 32
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignContent: "center"
    },
     body: {
        flex: 3,
        justifyContent: "center",
        alignContent: "center"
     }
})

export default HomeScreen;