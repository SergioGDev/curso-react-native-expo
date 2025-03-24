import { useAnimation } from "@/hooks/useAnimation";
import ThemeButton from "@/presentation/shared/ThemeButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Animated, Easing } from "react-native";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <ThemedView margin className="flex-1 items-center justify-center">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [
            {
              translateY: animatedTop,
            },
          ],
        }}
      />
      <ThemeButton
        className="my-3 mt-10 w-full h-10"
        onPress={() => {
          fadeIn({
            easing: Easing.bounce,
            duration: 700,
          });
          startMovingTopPosition({});
        }}
      >
        FadeIn
      </ThemeButton>
      <ThemeButton className="my-3 w-full h-10" onPress={() => fadeOut({})}>
        FadeOut
      </ThemeButton>
    </ThemedView>
  );
};
export default Animation101Screen;
