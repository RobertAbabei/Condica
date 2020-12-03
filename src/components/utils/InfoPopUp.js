import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSpring, useTransition, animated } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import * as messageActions from '~/store/actions/message.actions';
import Icon from 'react-native-vector-icons/AntDesign';


const AnimatedView = animated(View);

const InfoPopUp = () => {

    const dispatch = useDispatch();
    const messageReducer = useSelector(state => state.messageReducer);
    const { options } = messageReducer;

    useEffect(() => {
        console.log("OPTIONS: ", options);

        if (options.show) {
            const {autoHideDuration} = options;

            setTimeout(() => {

                dispatch(messageActions.hideMessage());
            }, autoHideDuration);
        }
    }, [options]);

    const transitions = useTransition(options.show, null, {
        from: {position: "absolute", opacity: 0, top: "0%"},
        enter: {opacity: 1, top: "17%"},
        leave: {opacity: 0, top: "0%"},
    })


    return transitions.map(({item, key, props}) => item && (

        <AnimatedView key={key} style={[styles.container, props]}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{options.message}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Icon
                    name="close"
                    size={30}
                    color="white"
                    onPress={() => dispatch(messageActions.hideMessage())}
                />
            </View>
        </AnimatedView>)
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "90%",
        minHeight: 50,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        zIndex: 9999
    },
    textContainer: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    text: {
        color: "white",
        fontSize: 16
    },
    buttonContainer: {
        
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default InfoPopUp;