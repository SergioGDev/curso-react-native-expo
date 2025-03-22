import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 60,
    textAlign: "right",
    fontWeight: "400",
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 30,
    textAlign: "right",
    fontWeight: "300",
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  button: {
    height: 64,
    width: 64,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    color: Colors.textPrimary,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
  }
});
