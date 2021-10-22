import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

export interface IIcomProps {
  name: string
  size: number
  style?: StyleProp<ViewStyle>
  color?: string,
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}