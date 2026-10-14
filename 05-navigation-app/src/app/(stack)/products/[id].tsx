import { Redirect, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
import { products } from '../../../../store/products.store';

const ProductsScreen= () => {

    const {id} = useLocalSearchParams();
    
    const product = products.find((p) => p.id === id);
    if(!product) {
        return<Redirect href='/'/>
    }
    return (
        <View>
            <Text className= 'font-work-black text-2xl'>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text className='font-work-black'>${product.price}</Text>
        </View>
    )
}

export default ProductsScreen