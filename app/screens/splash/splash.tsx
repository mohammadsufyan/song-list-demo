import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {INavigationScreenProps} from '../../common/interfaces/navigationProps';

export const Splash: React.FC<{navigation: INavigationScreenProps}> = ({
  navigation,
}) => {
  setTimeout(() => {
    navigation.navigate('HomeStack');
  }, 3500);

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>MICHAEL</Text>
      <Text style={styles.header2}>JACKSON</Text>
    </View>
  );
};
