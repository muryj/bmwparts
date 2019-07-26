// @flow
import React, { Component, useRef, useState, useEffect } from "react";
import { TextInput, View, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";

type Props = {
  style: ?Object,
  styleWrapper: ?Object,
  placeholderTextColor: string,
  password: boolean,
  value: string,
  numberOfLines: number,
  placeholder: string,
  onChangeText: Object,
  onEndEditing: Object,
  onFocus: Object,
  clearStyle: Object,
  onBlur: Object,
  autoCompleteType:string
};

export default function Input(props: Props) {
  const {
    value,
    numberOfLines,
    placeholder,
    placeholderTextColor,
    onChangeText,
    password,
    autoCompleteType
  } = props;
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (props.onFocus) {
      onFocus();
    }
    if (props.onBlur) {
      onBlur();
    }
    if (props.onEndEditing) {
      onEndEditing();
    }
  });

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const onEndEditing = () => {
    setFocus(false);
  };

  const getInputWrapperStyle = () => {
    const { styleWrapper = {} } = props;
    if (focus) {
      return [styles.inputWrapper, styles.inputWrapperFocused, styleWrapper];
    }
    return [styles.inputWrapper, styleWrapper];
  };

  const getInputStyle = () => {
    const { style = {} } = props;
    if (!focus) {
      return [styles.input, styles.inputUnfocused, style];
    }
    return [styles.input, style];
  };

  return (
    <View style={getInputWrapperStyle()}>
      <TextInput
        ref={inputRef}
        style={getInputStyle()}
        autoCapitalize='none'
        value={value}
        autoCompleteType={autoCompleteType}
        secureTextEntry={password}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        onEndEditing={() => onEndEditing()}
        onChangeText={onChangeText ? text => onChangeText(text) : null}
        clearButtonMode="while-editing"
        placeholderTextColor={placeholderTextColor || null}
      />
    </View>
  );
}
