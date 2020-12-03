import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import * as AuthActions from '~/auth/actions';

import Button from '~/components/Button';

const HomeScreen = () => {

    const dispatch = useDispatch();

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Coming soon</Text>
            <Button 
                title="LOGOUT"
                onPress={() => dispatch(AuthActions.logoutUser())}
            />
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
        fontSize: 45
    }
})

export default HomeScreen;