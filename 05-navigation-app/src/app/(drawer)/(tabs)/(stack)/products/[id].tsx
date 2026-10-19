import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { View, Text } from 'react-native'
import { products } from '../../../../../../store/products.store';
import { useEffect } from 'react';

const ProductsScreen= () => {

    const {id} = useLocalSearchParams();
    const navigation = useNavigation();
    
    const product = products.find((p) => p.id === id);
    
    useEffect(() => {
        navigation.setOptions({
            title: product?.title ?? 'Producto'
        });
    }, [product])
    
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