import React from 'react'
import { Container, Header, Content, Button, Text } from 'native-base';

export default function Main() {
    return (
     
      
        <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
      
           
       
    )
}
