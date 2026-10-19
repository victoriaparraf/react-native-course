import { Text } from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: 'indigo',
            headerShown: false,
            }}>
            
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Stack',
                    tabBarIcon: ({ color }) => 
                    <Ionicons name="person-add-outline" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home Screen',
                    tabBarIcon: ({ color }) => 
                    <Ionicons name="home-outline" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color }) => 
                    <Ionicons name="star-outline" size={28} color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout