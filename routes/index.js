import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import Home from '../screens/Home';
import Posts from '../screens/Posts';
import PostDetails from '../screens/PostDetails';


const { Navigator: StackNavigator, Screen: StackScreen } = createStackNavigator();


const Root = () => {
    return (
        <NavigationContainer>
            <StackNavigator
                screenOptions={({navigation})=>({
                        headerTitle: () => <Text>PostsList</Text>,
                        headerStyle: { backgroundColor: 'pink' , height: 100},
                        headerLeft: ()=><Text onPress={()=>navigation.goBack()}> BACK </Text> 
                        
                })}
            >
                <StackScreen name="home" component={Home} />
                <StackScreen name="posts" component={Posts} />
                <StackScreen name="postDetails" component={PostDetails} />
            </StackNavigator>
        </NavigationContainer>
    )
}


export default Root;