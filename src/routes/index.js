import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Main from '../pages/Main'
import Login from '../pages/Login';
import { navigationRef } from '../../RootNavigation';

const Stack = createStackNavigator();

export default class MainRouter extends React.Component {
    render() {

        return (

            <>
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Screen name="Login" component={Login} />
                        <Screen name="Main" component={Main} />




                    </Stack.Navigator>
                </NavigationContainer>
            </>
        )
    }
}
