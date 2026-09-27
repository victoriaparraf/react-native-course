import { Colors } from "@/constants/theme";
import * as Haptics from "expo-haptics";
import { Pressable, Text, useWindowDimensions } from "react-native";
import { globalStyles } from "../styles/global-styles";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) => {
  const { width: screenWidth } = useWindowDimensions();

  // 4 botones por fila: le restamos el padding de la fila (10 x 2)
  // y los márgenes de los botones (10 x 2 x 4), y no pasamos de 80
  const size = Math.min(80, (screenWidth - 20 - 80) / 4);

  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        height: size,
        // el doble ocupa 2 botones + los 20 de margen que hay entre ellos
        width: doubleSize ? size * 2 + 20 : size,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
