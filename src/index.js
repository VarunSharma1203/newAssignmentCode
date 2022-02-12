import React from 'react';
import {Provider} from 'react-redux';
import MainRouter from './routes'
import store from './reduxStore/store';
import {
    SafeAreaView,
} from 'react-native';
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <SafeAreaView style={{flex:1}}>
                <MainRouter />
            </SafeAreaView>
            </Provider>
        );
    }
}


