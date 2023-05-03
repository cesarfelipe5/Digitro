import {useNavigation} from '@react-navigation/native';
import {Icon, Text} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../../brands/Colors';
import styles from './Header.styles';
import {HeaderProps} from './Header.types';

export const Header = ({title, showBack = true}: HeaderProps): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBack && (
        <Icon
          name="arrow-left"
          type="font-awesome"
          onPress={() => navigation.goBack()}
          style={styles.arrowBack}
          color={COLORS.secundary}
        />
      )}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
