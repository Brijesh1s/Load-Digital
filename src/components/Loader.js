import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator animating={true} color="blue" />
    </View>
  );
};

export default Loader;
