import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeSwitch from "@/presentation/shared/ThemeSwitch";
import { useState } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-gesture-handler";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: false,
  });

  return (
    <ThemedView margin className="mt-2">
      <ThemeCard className="px-4">
        <ThemeSwitch
          text="Activo"
          value={state.isActive}
          className="mx-1 my-3"
          onValueChange={(value) => setState({ ...state, isActive: value })}
        />
        <ThemeSwitch
          text="Hambriento"
          value={state.isHungry}
          className="mx-1 my-3"
          onValueChange={(value) => setState({ ...state, isHungry: value })}
        />
        <ThemeSwitch
          text="Contento"
          value={state.isHappy}
          className="mx-1 my-3"
          onValueChange={(value) => setState({ ...state, isHappy: value })}
        />
      </ThemeCard>
    </ThemedView>
  );
};
export default Switches;
