import React, { Component } from 'react';
import { TextInput, Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';
import Expandable_ListView from '../../component/Expandable_ListView'


export default class App extends Component {

    constructor() {
        super();

        if (Platform.OS === 'android') {

            UIManager.setLayoutAnimationEnabledExperimental(true)

        }

        this.state = { text: '', AccordionData: [], oldData: [] }
        this.getData();
    }
    getData = () => {
        fetch('https://api.jsonbin.io/b/60e7f4ebf72d2b70bbac2970')
            .then((response) => response.json())
            .then((json) => {
                console.log(json.data)
                this.setState({
                    AccordionData:json.data,
                    oldData:json.data
                })
            })
            .catch((error) => console.error(error))

    }


    update_Layout = (index) => {

        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        const array = [...this.state.oldData];
       
        if(array[index]['expanded'] == undefined)
        {
            array[index]['expanded'] = true;

        }else{
            array[index]['expanded'] = false;
        }
       

        this.setState(() => {
            return {
                AccordionData: array
            }
        });
    }

    SearchFilterFunction(text) {

        if (text == "") {
            this.setState({
                AccordionData: this.state.oldData,
                text: text
            })
        } else {
            const newData = this.state.AccordionData.filter(function (item) {
                const itemData = item.title.toUpperCase()
                const textData = text.toUpperCase()
                console.log(">>>>>>>>",itemData.indexOf(textData))
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                AccordionData: newData,
                text: text
            })
        }

    }
    render() {
        return (
            <View style={styles.MainContainer}>

                <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>

                    <Text style={styles.heading}>Approved Foods List</Text>
                    <View style={styles.searchView}>
                        <TextInput
                            style={{
                                width: '100%', height: '100%', padding: 10
                            }}
                            onChangeText={(text) => this.SearchFilterFunction(text)}
                            value={this.state.text}
                            underlineColorAndroid='transparent'
                            placeholder="Try searching fat, sauces names..."
                        />
                    </View>
                    {
                        this.state.AccordionData.map((item, key) =>
                        (
                            <Expandable_ListView key={item.title} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
                        ))
                    }
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: '#eae8f0',
    },
    heading: {
        color: 'black',
        fontSize: 25,
        fontWeight: '600'
    },
    searchView: {
        width: '100%',
        height: 60,
        backgroundColor: '#eff5fa',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }


});