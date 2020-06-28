import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header1: {
    fontSize: 40,
    color: 'black',
    fontWeight: '800',
  },
  header2: {
    fontSize: 40,
    fontWeight: '800',
    color: 'grey',
  },
  loaderView: {
    width,
    height,
    top: 0,
    left: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listStyles: {
    flex: 1,
  },
});
