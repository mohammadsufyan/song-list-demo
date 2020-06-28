import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import {INavigationScreenProps} from '../../common/interfaces/navigationProps';
import styles from './styles';
import {SongDetails} from '../../common/interfaces/song';

const dateFormat = (dateString: string) => {
  const date = new Date(dateString);
  return date.toDateString();
};

export const Details: React.FC<{navigation: INavigationScreenProps}> = ({
  navigation,
}) => {
  const songDetails = navigation.getParam('songDetails') as SongDetails;

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.backImage}
        blurRadius={1}
        source={{uri: songDetails.artworkUrl100}}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.header1}>{songDetails.trackName}</Text>
          <Text style={styles.header2}>{songDetails.collectionName}</Text>
          <Text style={styles.artistName}>{songDetails.artistName}</Text>
          <Text style={styles.genre}>{songDetails.primaryGenreName}</Text>
          <Text style={styles.date}>
            Released Date: {dateFormat(songDetails.releaseDate)}
          </Text>
          <Text style={styles.date}>Country: {songDetails.country}</Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
