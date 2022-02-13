
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground

} from 'react-native';
import { RightIconTextInput, Button } from '../../component';
import NetInfo from "@react-native-community/netinfo";
import styles from './styles';
import { imagePath } from '../../config'
import { ListItem, SearchInput } from '../../component';
import { setStorage, getStorage } from '../../utils';
import { getLoginData } from '../../reduxStore/action'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import URLS from '../../api';
import { set } from 'react-native-reanimated';
import { navigate } from '../../../RootNavigation';

export default function App() {
    
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(async () => {
      
        const id = await getStorage('id');
        if (id != null) {
          navigate('Main')
        }



    }, []);

    const login = () => {
        NetInfo.fetch().then(state => {

            if (state.isConnected) {
                let formdata = new FormData();
                formdata.append("email", email)
                formdata.append("password", password)

                dispatch(getLoginData(URLS.login_url, formdata, handleCallback));
            } else {
                alert("Check your Internet")
            }

        });

    }

    const handleCallback = (response) => {
        console.log("handleCallback", response.id)
        if (response.id) {
            setStorage('id',response.id),
           navigate('Main')
        }

    };
    return (

        <View style={styles.contain}>
            <ImageBackground style={styles.background} source={imagePath.loginBackground}>
                <View style={styles.viewGraph} />
                <View style={styles.viewGraphtwo}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.heading}>Hi Please login your account</Text>
                    <RightIconTextInput
                        label="Email"

                        value={email}
                        heading={true}
                        imagepath={imagePath.emailIcon}
                        onChangeText={email => {
                            setEmail(email)
                        }}
                        placeholder="example@gmail.com"

                    />
                    <RightIconTextInput
                        value={password}
                        heading={false}
                        imagepath={imagePath.passwordIcon}
                        onChangeText={password => {
                            setPassword(password)
                        }}
                        secureTextEntry={true}
                        placeholder="Password"

                    />
                    <View style={styles.forgetContain}>
                        <Text style={styles.forgetText}>Forget password?</Text>
                    </View>
                    <View style={styles.btncontain}>
                        <Button
                            disabled={true}
                            onPress={() => {
                                
                             login()
                            }}
                            textStyle={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}
                            title={'LOG IN'}
                            btnStyle={{ height: 60, width: '90%', backgroundColor: '#000', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                        />
                    </View>
                    <View style={styles.signContain}>
                        <Text style={styles.forgetText}>Don’t have an account? <Text style={[styles.signText, { fontWeight: 'bold' }]}>Sign up</Text></Text>
                    </View>
                </View>
            </ImageBackground>
        </View>

    );

}



