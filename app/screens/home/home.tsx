import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
} from 'react-native';
import styles from './styles';
import {getSongsList} from '../../utils/apiManager';
import {SongDetails} from '../../common/interfaces/song';
import {SongItem} from '../../components/songView/songView';

export const Home: React.FC = () => {
  const [songsList, setSongsListData] = useState<SongDetails[]>([]);
  const [loading, setLoading] = React.useState(true);

  const getData = () => {
    setLoading(true);
    getSongsList()
      .then(response => {
        setLoading(false);
        const data = response.json();
        setSongsListData(data.results);
      })
      .catch(error => {
        setLoading(false);
        Alert.alert('Data not found');
      });
  };

  useEffect(() => {
    // call API
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          style={styles.listStyles}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={() => null} />
          }
          data={songsList}
          keyExtractor={(item, index) => `song${index}`}
          renderItem={({item}) => <SongItem songDetails={item} />}
        />
      </View>
      {loading && (
        <View style={styles.loaderView}>
          <ActivityIndicator size="large" animating={true} />
        </View>
      )}
    </SafeAreaView>
  );
};
