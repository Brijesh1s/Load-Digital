import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";

const BackButton = (props) => {
  const { onPress } = props;
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onPress}
        style={[globalStyles.btnView, styles.container]}
      >
        <Image style={globalStyles.icon_sm} source={require('../assets/images/left-arrow.png')} />
        <Text style={styles.txt}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
  },
  txt: {
    fontSize: 16,
  },
});

export default BackButton;
