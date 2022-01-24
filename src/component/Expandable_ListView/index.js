import React, { Component } from 'react';
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';

export default class Expandable_ListView extends Component {

    constructor() {

        super();

        this.state = {

            layout_Height: 0

        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(">>>>>>>>>>",nextProps)

        if (nextProps.item.expanded) {
            this.setState(() => {
                return {
                    layout_Height: null
                }
            });
        }
        else {
            this.setState(() => {
                return {
                    layout_Height: 0
                }
            });
        }
    }
    generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.layout_Height !== nextState.layout_Height) {
            return true;
        }
        return false;
    }

    show_Selected_Category = (item) => {

        // Write your code here which you want to execute on sub category selection.
        Alert.alert(item);

    }


    render() {
        return (
            <View style={{}}>

                <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>
                    <Image
                        source={{ uri: '' }}
                        style={{ width: 45, height: 45, borderWidth: 1, margin: 5 }} />

                    <Text style={[styles.category_Text, { color: 'black' }]}>{this.props.item.title} </Text>

                    <Image
                        source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon.png' }}
                        style={styles.iconStyle} />

                </TouchableOpacity>

                <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>
                    <Text style={[styles.category_Text, { color: 'black' }]}>Title Name</Text>
                    {
                        this.props.item.data.map((item, key) => (

                            <TouchableOpacity key={key} style={styles.sub_Category_Text} onPress={this.show_Selected_Category.bind(this, item.title)}>

                                <Text> {item.title} </Text>

                            </TouchableOpacity>

                        ))
                    }
                    <View style={{ height: 100, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '90%', height: 60, backgroundColor: '#eff5fa', marginTop: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Text style={{ color: 'gray', fontSize: 15 }}>Testing content........</Text>
                        </View>
                    </View>
                </View>

            </View >

        );
    }
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: '#F5FCFF',
    },

    iconStyle: {
        width: 30,
        borderWidth: 1,
        position: 'absolute',
        right: 10,
        height: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
        tintColor: '#fff'

    },

    sub_Category_Text: {
        fontSize: 14,
        justifyContent: 'center',
        color: '#000',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'

    },

    category_Text: {

        fontSize: 16,
        padding: 10
    },

    category_View: {
        marginVertical: 7,
        height: 60,
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    Btn: {
        padding: 10,
        backgroundColor: '#FF6F00'
    }

});