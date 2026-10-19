import { View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router, useNavigation } from 'expo-router'
import CustomButton from '../../../../../../components/shared/CustomButton'
import { DrawerActions } from 'expo-router/react-navigation'
const HomeScreen = () => {

    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer())
    }

    return (    
        <SafeAreaView>
            <View className="px-10 mt-5">

                <CustomButton
                    className="mb-2"
                    color='Primary'
                    onPress={() => router.push('/(drawer)/(tabs)/(stack)/products')}
                >
                    Productos
                </CustomButton>

                <CustomButton
                    className="mb-2"
                    color='Secondary'
                    onPress={() => router.push('/(drawer)/(tabs)/(stack)/profile')}
                >
                    Perfil
                </CustomButton>
                <CustomButton
                    className="mb-2"
                    color='Tertiary'
                    onPress={() => router.push('/(drawer)/(tabs)/(stack)/settings')}
                >
                    Configuración
                </CustomButton>

                <Link href="/(drawer)/(tabs)/(stack)/products" asChild>
                    <CustomButton variant="text-only" className="mb-10" color = 'Primary'>Productos</CustomButton>
                </Link>

                <CustomButton onPress={onToggleDrawer} color={'Primary'}>
                    Abrir Menu
                </CustomButton>
                
                {/* <Link className="mb-5" href="/products">Products</Link>
                <Link className="mb-5" href="/profile">Profile</Link>
                <Link className="mb-5" href="/settings">Settings</Link> */}
            </View>
        </SafeAreaView> 
    )
}

export default HomeScreen