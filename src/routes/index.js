import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Main from '../pages/Main'
import Profile from '../pages/Splash_Screen';


export default class MainRouter extends React.Component {
    render() {

        return (

            <>
                <NavigationContainer independent>
                    <Navigator screenOptions={{ headerShown: false }}>
                        <Screen name="Profile" component={Profile} />
                        <Screen name="Main" component={Main} />

                    </Navigator>
                </NavigationContainer>
            </>
        )
    }
}
