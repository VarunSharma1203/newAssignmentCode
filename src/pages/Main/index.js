
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image, FlatList, Alert

} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import styles from './styles';
import { imagePath } from '../../config'
import { ListItem, SearchInput } from '../../component';
import { getBlockPhone } from '../../reduxStore/action'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import URLS from '../../api';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase('Unb_database.db', '1.0', '', 1)

export default function App() {

    const dispatch = useDispatch();
    const [number, setnumber] = useState([]);
    useEffect(() => {
        
        NetInfo.fetch().then(state => {
          
            if (state.isConnected) {
                dispatch(getBlockPhone(URLS.main_url, handleCallback));
            } else {
                createTable()
            }

        });



    }, []);



    const handleCallback = (response) => {

        setnumber(response)
        uploadData(response)
    };
    const createTable = () => {

        db.transaction(function (txn) {
            txn.executeSql('SELECT * FROM `User_number`', [], function (tx, res) {
                for (let i = 0; i < res.rows.length; ++i) {
                    setnumber(JSON.parse(res.rows.item(i).item))
                }
            })
        })


    };

    const uploadData = (item) => {
        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS User_number', [])
            txn.executeSql(
                'CREATE TABLE IF NOT EXISTS User_number(number_id INTEGER PRIMARY KEY NOT NULL, item VARCHAR(255))',
                []
            )
            txn.executeSql('INSERT INTO User_number (item) VALUES (:item)', [JSON.stringify(item)])
        })


    };


    return (

        <View style={styles.contain}>
            <ImageBackground style={styles.background}>
                <View style={styles.viewGraph}>
                    <Image style={{ width: 60, height: 60 }} resizeMode='contain' source={imagePath.headerIcon} />

                </View>
                <View style={styles.viewGraphtwo}>
                    <Text style={styles.welcomeText}>Welcome, Alex</Text>
                    <Text style={styles.heading}>Search any number you want to block</Text>
                    <SearchInput

                        heading={false}
                        imagepath={imagePath.Searchicon}
                        onChangeText={email => {
                        }}
                        placeholder="Enter number"

                    />
                    <FlatList
                        data={number}
                        renderItem={({ item }) => <ListItem
                            phone={item.country_code + " " + item.mobile_number}
                            blockCount={item.total_count}
                            imagepath={imagePath.redphoneicon}
                        />}
                    />


                </View>
            </ImageBackground>
        </View>

    );

}



