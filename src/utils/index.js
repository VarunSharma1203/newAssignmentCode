import {Platform, ToastAndroid, Linking, Alert} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';


module.exports = {
 
  setStorage: function (key, value) {
    try {
      AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log('Set Storage', e.message);
    }
  },

  getStorage: async function (key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return JSON.parse(value);
    } catch (e) {
      console.log('Get Storage', e.message);
    }
  },

  

  removeStorageKey: async function (key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log('Get Storage', e.message);
    }
  },

  clearStorage: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  },

 
  isValidEmail: function (str) {
    //third params= 1: has val means need two email comparison
    if (str != null && str.trim().length > 0) {
      if (
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          str,
        )
      ) {
        return true;
      } else {
        alert('Please enter valid email');
      }
    }
    // return (true);
  },
 
 
};
