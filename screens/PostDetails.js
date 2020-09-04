import React from 'react';
import { View, Text, Image } from 'react-native';



export default function PostDetails({ route }) {
    const { item, img } = route.params || {};
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <Image source={img}
            style={{width:300, height: 300, borderRadius: 20, margin: 20}}
            />
            <Text style={{marginBottom: 20 , fontWeight: "bold" }} >{item.title}</Text>
            <Text style={{marginBottom: 20 }} >{item.body}</Text>

        </View>
    )
}

