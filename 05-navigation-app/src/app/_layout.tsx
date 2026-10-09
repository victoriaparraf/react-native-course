import "./global.css"
import {Slot, SplashScreen} from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from "react";

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
    <Slot />
  )
}

export default RootLayout
