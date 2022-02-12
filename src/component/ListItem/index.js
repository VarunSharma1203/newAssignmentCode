import React from 'react';
import { TextInput, Image, View, Text } from 'react-native';
export const ListItem = props => {
  const {
    editable,
    imagepath,
    phone,
    blockCount

  } = props;
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', height: 80, width: '100%', flexDirection: 'row', marginTop: 5 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 70, flexDirection: 'row', backgroundColor: '#FCFCFC', borderWidth: 1, width: '96%', borderColor: '#0000001a', borderRadius: 10 }}>

        <View style={{ flex: 1, justifyContent: 'center',marginLeft: 10 }}>
          <Text style={{ fontSize: 18, color: '#000' }} resizeMode='contain'>{phone}</Text>

        </View>
        <View style={{ flex: .5, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ width: 25, height: 25 }} resizeMode='contain' source={imagepath} />
          <Text style={{ fontSize: 18, color: 'red' }} resizeMode='contain'>{blockCount}</Text>

        </View>


      </View>
    </View>
  );
};

export default ListItem;
