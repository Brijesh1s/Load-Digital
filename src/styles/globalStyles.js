import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    alignItems: "center",
  },
  flagImg: {
    width: windowWidth - 50,
    height: windowWidth - 80,
    alignSelf: "center",
  },
  icon_sm: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  text_sm: {
    fontSize: 15,
  },
  text_md: {
    fontSize: 16,
  },
  text_lg: {
    fontSize: 18,
  },
  text_vlg: {
    fontSize: 20,
  },
  text_bold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text_light: {
    color: 'grey',
    fontSize: 14,
  },
  btnView: {
    flexDirection: "row",
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  cardStyle: {
    margin: 25,
    width: "75%",
    alignSelf: "center",
  },
});

export default globalStyles;
