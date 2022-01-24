import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,

} from 'react-native';
export default class App extends React.Component {
    render() {

        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: '60%', height: 60, borderRadius: 5, backgroundColor: 'gray',justifyContent:'center',alignItems:'center' }}
                    onPress={() => {
                        this.props.navigation.navigate('Main')
                    }}
                >
                    <Text style={{color:'#fff',fontSize:20}}>go to main</Text>
                </TouchableOpacity>
            </View>

        );
    }
}


