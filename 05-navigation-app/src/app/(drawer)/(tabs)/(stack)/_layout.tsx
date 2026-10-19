
import { Ionicons } from '@expo/vector-icons';
import { Stack, router, useNavigation } from 'expo-router'
import { DrawerActions } from 'expo-router/react-navigation';
import { Text } from 'react-native'

const StackLayout = () => {

  const navigation = useNavigation();

  const onHeaderLeftPress = (canGoBack: boolean = false) => {
    if (canGoBack) {
      // router.back() regresa en el Stack donde estás. StackActions.pop() no
      // llega al Stack porque esta `navigation` es la del padre (las Tabs)
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer());
  }
  
  return (
    <Stack
      screenOptions={{
        //headerShown: false,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: 'white' },
        headerLeft: ({tintColor,canGoBack}) => 
          <Ionicons 
            name={canGoBack ? "arrow-back-outline" : "grid-outline" }
            size={20} 
            className="mr-5" 
            onPress={ () => onHeaderLeftPress(canGoBack) }
            />,
      }}
    >
      <Stack.Screen name="home/index"
        options={{ title: 'Home Screen' }}
      />
      <Stack.Screen name="products/index"
        options={{ title: 'Products Screen' }}
      />
      <Stack.Screen name="profile/index"
        options={{ title: 'Profile Screen' }}
      />
      <Stack.Screen name="settings/index"
        options={{ title: 'Settings Screen' }}
      />
    </Stack>

  )
}

export default StackLayout