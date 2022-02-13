import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Video from '../pages/Video'


export default class MainRouter extends React.Component {
    render() {

        return (

            <>
                <NavigationContainer independent>
                    <Navigator screenOptions={{ headerShown: false }}>
                        <Screen name="Video" component={Video} />
                        
                    </Navigator>
                </NavigationContainer>
            </>
        )
    }
}
