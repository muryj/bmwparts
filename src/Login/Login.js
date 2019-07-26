// @flow

import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
  LayoutAnimation
} from "react-native";
import images from "../res/images.js";
import styles from "./styles.js";
import Input from "../components/Input";
import Button from "../components/Button";
import Firebase from "../utils/Firebase";
import { Actions } from "react-native-router-flux";

type Props = {};

const useScale = () => {
  const scale = useRef(new Animated.Value(0)).current;
  const scaling = () => {
    Animated.timing(scale, { toValue: 1, duration:500 }).start();
  };
  useEffect(() => {
    scale.setValue(0);
    scaling();
  }, []);
  return scale;
};

export default function Login() {
  const [auth, setAuth] = useState({ email: "", password: "" });
  const [animationState, setAnimationState] = useState(1);
  const scale1 = useScale();
  const scale2 = useScale();
  console.log(scale1,scale2);

  const onChange = (field, value) => {
    setAuth({ ...auth, [field]: value });
  };

  const registerUser = () => {
    Firebase.register(auth.email, auth.password);
  };

  const CustomLayoutAnimation = {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity
    },
    update: {
      type: LayoutAnimation.Types.curveEaseInEaseOut
    }
  };

  const animation = index => {
    LayoutAnimation.configureNext(CustomLayoutAnimation);
    setAnimationState(index);
  };

  const position1 = {
    transform: [
      {
        scaleX: scale1.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50]
        })
      },
      {
        scaleY: scale1.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50]
        })
      },
    ]
  };
  const position2 = {
    transform: [
      {
        scaleX: scale2.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50]
        })
      },
      {
        scaleY: scale2.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50]
        })
      },
    ]
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={images.spinner} style={styles.logo} />
        <View style={styles.formControls}>
          <TouchableOpacity onPress={() => animation(1)}>
            <Text style={styles.formControlsText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => animation(2)}>
            <Text style={styles.formControlsText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          {animationState === 1 ?
            <Animated.View style={[styles.round1, position1]} />
          : null}
          {animationState === 2?<Animated.View style={[styles.round2, position2]} />: null }
          <Input
            placeholder="email"
            autoCompleteType="email"
            styleWrapper={{ marginBottom: 20 }}
            onChangeText={text => onChange("email", text)}
          />
          <Input
            placeholder="password"
            autoCompleteType="password"
            password
            styleWrapper={{ marginBottom: 20 }}
            onChangeText={text => onChange("password", text)}
          />
          {animationState === 2 ? (
            <Input
              placeholder="name"
              styleWrapper={{ marginBottom: 20 }}
              onChangeText={text => onChange("name", text)}
            />
          ) : null}
          {animationState === 1 ? (
            <Button placeholder="Login" onPress={() => animation(2)} />
          ) : (
            <Button placeholder="Sign Up" onPress={() => animation(1)} />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
