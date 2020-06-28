import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import styles from './styles';
import {SongDetails} from '../../common/interfaces/song';
import {INavigationScreenProps} from '../../common/interfaces/navigationProps';

export const SongItemView: React.FC<{
  songDetails: SongDetails;
  navigation: INavigationScreenProps;
}> = ({songDetails, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => navigation.navigate('Details', {songDetails})}>
      <View style={styles.container}>
        <Image source={{uri: songDetails.artworkUrl100}} style={styles.image} />
        <View style={styles.detailsView}>
          <Text style={styles.title}>
            {songDetails.trackName}
            {'\n'}
            {songDetails.collectionName}
          </Text>
          <Text style={styles.artist}>{songDetails.artistName}</Text>
          <Text style={styles.price}>${songDetails.trackPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const SongItem = withNavigationFocus(SongItemView);
