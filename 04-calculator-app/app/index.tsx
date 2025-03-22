import { View } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles.styles";
import ThemeText from "@/components/ThemeText";
import CalculatorBoton from "@/components/CalculatorBoton";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";

const CalculatorApp = () => {
  const { buildNumber, number } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">{number}</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>

      {/* Fila de botones */}
      <View style={globalStyles.row}>
        <CalculatorBoton
          color={Colors.lightGray}
          blackText
          onPress={() => console.log("C")}
          label="C"
        />
        <CalculatorBoton
          color={Colors.lightGray}
          blackText
          onPress={() => console.log("+/-")}
          label="+/-"
        />
        <CalculatorBoton
          color={Colors.lightGray}
          blackText
          onPress={() => console.log("del")}
          label="del"
        />
        <CalculatorBoton
          onPress={() => console.log("÷")}
          label="÷"
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBoton onPress={() => buildNumber("7")} label="7" />
        <CalculatorBoton onPress={() => buildNumber("8")} label="8" />
        <CalculatorBoton onPress={() => buildNumber("9")} label="9" />
        <CalculatorBoton
          onPress={() => console.log("X")}
          label="X"
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBoton onPress={() => buildNumber("4")} label="4" />
        <CalculatorBoton onPress={() => buildNumber("5")} label="5" />
        <CalculatorBoton onPress={() => buildNumber("6")} label="6" />
        <CalculatorBoton
          onPress={() => console.log("÷")}
          label="-"
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBoton onPress={() => buildNumber("1")} label="1" />
        <CalculatorBoton onPress={() => buildNumber("2")} label="2" />
        <CalculatorBoton onPress={() => buildNumber("3")} label="3" />
        <CalculatorBoton
          onPress={() => console.log("+")}
          label="+"
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBoton
          onPress={() => console.log("0")}
          label="0"
          doubleSize
        />
        <CalculatorBoton onPress={() => console.log(".")} label="." />
        <CalculatorBoton
          onPress={() => console.log("=")}
          label="="
          color={Colors.orange}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
