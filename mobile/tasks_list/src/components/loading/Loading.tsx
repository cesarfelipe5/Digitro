import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './Loading.styles';
import {LoadingProps} from './Loading.types';

export const Loading = ({loading, children}: LoadingProps): JSX.Element => {
  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#4fa5dc" />
    </View>
  ) : (
    <>{children}</>
  );
};
