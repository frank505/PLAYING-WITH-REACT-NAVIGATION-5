import React from 'react'
import {Text} from 'native-base'

export default function FeedFirst({navigation}) {

    const moveToProfile = () =>
    {
        navigation.navigate('FeedSecond');
    }
    return (
       <Text onPress={moveToProfile}>Hello i am a FeedFirst</Text>
    )
}

