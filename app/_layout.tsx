import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="(app)"
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="(new)"
      options={{headerShown: false}}
    />
  </Stack>;
}
