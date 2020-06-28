import React from 'react';
import {StyleSheet, View} from 'react-native';
import RootApp from './app/navigation/navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <RootApp />
    </View>
  );
};

export default App;
