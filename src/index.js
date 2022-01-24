import React from 'react';
import MainRouter from './routes'
import {
    SafeAreaView,
} from 'react-native';
export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <MainRouter />
            </SafeAreaView>
        );
    }
}


