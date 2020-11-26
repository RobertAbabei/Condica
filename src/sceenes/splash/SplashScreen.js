import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CircleSnail from 'react-native-progress/CircleSnail'

import condicaLogo from '~/assets/condica_logo.png'

const SplashScreen = () => {

    return (
        <View style={styles.container}>
            <CircleSnail
                color="#61dafb"
                thickness={6}
                size={150}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.87)"
    }
})

export default SplashScreen;