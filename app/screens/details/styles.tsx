import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImage: {
    flex: 1,
    width,
  },
  scrollView: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 10,
    backgroundColor: '#00000030',
  },
  header1: {
    fontSize: 80,
    color: 'white',
    fontWeight: '800',
  },
  header2: {
    fontSize: 50,
    fontWeight: '800',
    color: '#FF1111',
  },
  artistName: {
    marginTop: 10,
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
  },
  genre: {
    marginTop: 6,
    fontSize: 30,
    fontWeight: '400',
    color: 'yellow',
  },
  date: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
});
