// @flow
import React, { Component, useRef, useState, useEffect } from "react";
import { TextInput, View, Image, TouchableOpacity, Text} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";

type Props = {
    style: ?Object,
    placeholder: string,
    placeholderTextStyle: ?Object
};

export default function Input(props: Props) {
    const {
        placeholder,
        placeholderTextStyle,
    } = props;

    const getButtonStyle = () => {
        const { style = {} } = props;
        return [styles.button, style];
    };

    return (
        <View style={{height:50}}>
        <TouchableOpacity
            onPress={()=>console.log('lol')}
            style={getButtonStyle()}>
            <Text textTransform='capitalize' style={[styles.text,placeholderTextStyle]}>{placeholder}</Text>
        </TouchableOpacity>
        </View>
    );
}
