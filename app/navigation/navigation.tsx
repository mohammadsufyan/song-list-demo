import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Splash} from '../screens/splash/splash';
import {Home} from '../screens/home/home';
import {Details} from '../screens/details/details';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Songs',
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      // header: null,
      title: 'Song Details',
      headerTransparent: true,
      headerTitleStyle: {
        color: 'white',
      },
      headerBackTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    },
  },
});

const Navigator = createSwitchNavigator({
  Splash: Splash,
  HomeStack: HomeStack,
});

const RootApp = createAppContainer(Navigator);

export default RootApp;
