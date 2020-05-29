import React from 'react'
import { Container, Header, Content, Button, Text } from 'native-base';

export default function FeedSecond({navigation}) {

    const moveToProfile = () =>
    {
        navigation.push('Profile');
    }
    return (
        <Container>
        <Header />
        <Content>
         
          <Text onPress={moveToProfile}>Hello i am a FeedSecond</Text>
         
        </Content>
      </Container>
       
    )
   
}
