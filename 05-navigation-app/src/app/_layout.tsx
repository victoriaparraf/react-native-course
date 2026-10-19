import "./global.css"
import {Slot, SplashScreen, Stack} from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

// Se llama una sola vez, al cargar el archivo, no en cada render
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('@/assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('@/assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('@/assets/fonts/WorkSans-Medium.ttf'),
  })

  useEffect(() => {

    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  )
  // return (
  //   <Slot />
  // );
}

export default RootLayout
