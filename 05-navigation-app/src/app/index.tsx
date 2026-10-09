import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-5xl"
        style={{fontFamily: 'WorkSans-Black'}}
        >Hola Mundo</Text>
        <Text className="text-4xl font-work-black"
        >Hola Mundo</Text>
        <Text className="text-3xl font-work-medium"
        >Hola Mundo</Text>
        <Text className="text-2xl font-work-light"
        >Hola Mundo</Text>
        <Text className="text-xl"
        >Hola Mundo</Text>
      </View>
    </SafeAreaView>
  )
}

export default App