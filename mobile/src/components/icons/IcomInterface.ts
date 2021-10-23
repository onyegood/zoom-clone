import { GestureResponderEvent, StyleProp, TextStyle } from "react-native";

export interface IIcomProps {
  name: string
  size: number
  style?: StyleProp<TextStyle>
  color?: string,
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}