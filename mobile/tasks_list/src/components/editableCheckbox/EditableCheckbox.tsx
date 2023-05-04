import {Input} from '@rneui/themed';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {EditableCheckboxProps} from './editableCheckbox.types';

export const EditableCheckbox = ({
  checked,
  value,
  onPress,
  editable,
  onTextEdit,
}: EditableCheckboxProps) => {
  const handleOnPress = () => {
    onPress;
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={handleOnPress}>
        {/* {checked ? <Check /> : <Uncheck />} */}
        <Input value={value} editable={editable} onChangeText={onTextEdit} />
      </TouchableOpacity>
    </View>
  );
};
