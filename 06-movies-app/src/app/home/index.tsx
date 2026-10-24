import { View, Text } from 'react-native'
import React from 'react'
import { useMovies } from '../../../presentation/hooks/useMovies'

const HomeScreen = () => {

    const { nowPlayingQuery } = useMovies()
    


    return (
        <View>
            <Text>Home Screen</Text>
            <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
        </View>
    )
}

export default HomeScreen