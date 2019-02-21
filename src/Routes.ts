import { createStackNavigator, createAppContainer } from "react-navigation";
import { home } from './scenes';

const AppNavigator = createStackNavigator(
  {
    Home: home,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null,
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
