import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  touchable: {
    alignSelf: 'stretch',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  container: {
    alignSelf: 'stretch',
    marginHorizontal: 8,
    marginVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
  },
  detailsView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  artist: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
  },
  price: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '400',
    color: 'green',
  },
});
