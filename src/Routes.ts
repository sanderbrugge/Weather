import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, Detail } from './scenes';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Detail: Detail
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
