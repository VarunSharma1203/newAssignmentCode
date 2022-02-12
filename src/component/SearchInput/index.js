import React from 'react';
import { TextInput, Image, View, Text } from 'react-native';
export const SearchInput = props => {
  const {
    editable,
    imagepath,
    heading,
    createReference,
    rightIconPress,
    showLeftIcon,
    showRightIcon,
    blurOnSubmit,
    label,
    autoCapitalize,
    onSubmitEditing,
    onChangeText,
    value,
    iconFamilyName,
    iconName,
    iconSize,
    iconColor,
    l_iconFamilyName,
    l_iconName,
    l_iconSize,
    l_iconColor,
    secureTextEntry,
    placeholder,
    keyboardType,
    returnKeyType,
    containerStyle,
    numberOfLines,
    multiline,
    maxLength,
    showLabelIcon,
  } = props;
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 20, flexDirection: 'row' }}>


      <View style={{ justifyContent: 'center', alignItems: 'center', height: 60,  flexDirection: 'row', backgroundColor: '#FCFCFC', borderWidth: 1, width: '80%', height: 58, borderColor: '#0000001a', borderRadius: 10 }}>


        <TextInput
          ref={createReference}
          autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
          multiline={!!multiline ? multiline : false}
          numberOfLines={!!numberOfLines ? numberOfLines : 1}
          style={
            {
              fontWeight: 'bold',
              includeFontPadding: false,
              fontWeight: 'normal',
              height: 60,
              width: '80%',
              color: '#000',
              zIndex: 2,
              fontSize: 16, paddingTop: multiline && 14
            }
          }
          value={value}
          maxLength={!!maxLength ? maxLength : 1000}
          onChangeText={val => onChangeText(val)}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          placeholderTextColor={'#000'}
          blurOnSubmit={blurOnSubmit == false ? false : true}
          editable={editable}
        />
      </View>
      <View style={{ width: 50, height: 50, borderWidth: 1, borderRadius: 5, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center',margin:10 }}>
        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={imagepath} />

      </View>
    </View>
  );
};

export default SearchInput;
