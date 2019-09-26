import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen'
import QRScannerScreen from '../screens/QRScannerScreen'

const AppContainer = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    QRScanner: {
      screen: QRScannerScreen
    }
  },
  {
    initialRouteName: 'Home',
  }
)

export default createAppContainer(AppContainer);
