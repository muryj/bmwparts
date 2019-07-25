// @flow

import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import images from "../res/images.js";
import styles from "./styles.js";
import Input from "../components/Input";
import Button from "../components/Button";

type Props = {};

export default function Login() {
  const [count, setCount] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={images.spinner} style={styles.logo} />
        <View style={{ width: "60%" }}>
          <Input
            placeholder="email"
            autoCompleteType="email"
            styleWrapper={{ marginBottom: 20 }}
          />
          <Input
            placeholder="password"
            autoCompleteType="password"
            password
            styleWrapper={{ marginBottom: 20 }}
          />
          <Button placeholder="Login" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10
            }}
          >
            <TouchableOpacity>
              <Text>Register here</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Need help?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
