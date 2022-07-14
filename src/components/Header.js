import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Where in the world?</Text>
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <Image style={globalStyles.icon_sm} source={require('../assets/images/sleep-mode.png')} />
        <Text>Dark mode</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 80,
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
