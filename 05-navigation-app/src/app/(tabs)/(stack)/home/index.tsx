import { View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import CustomButton from '../../../../../components/shared/CustomButton'

const HomeScreen = () => {
    return (    
        <SafeAreaView>
            <View className="px-10 mt-5">

                <CustomButton
                    className="mb-2"
                    color='Primary'
                    onPress={() => router.push('/(tabs)/(stack)/products')}
                >
                    Productos
                </CustomButton>

                <CustomButton
                    className="mb-2"
                    color='Secondary'
                    onPress={() => router.push('/(tabs)/(stack)/profile')}
                >
                    Perfil
                </CustomButton>
                <CustomButton
                    className="mb-2"
                    color='Tertiary'
                    onPress={() => router.push('/(tabs)/(stack)/settings')}
                >
                    Configuración
                </CustomButton>

                <Link href="/(tabs)/(stack)/products" asChild>
                    <CustomButton variant="text-only" className="mb-10" color = 'Primary'>Productos</CustomButton>
                </Link>
                
                {/* <Link className="mb-5" href="/products">Products</Link>
                <Link className="mb-5" href="/profile">Profile</Link>
                <Link className="mb-5" href="/settings">Settings</Link> */}
            </View>
        </SafeAreaView> 
    )
}

export default HomeScreen