import { createStackNavigator, createAppContainer } from "react-navigation";
import { home } from './scenes';

const AppNavigator = createStackNavigator(
  {
    Home: home,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
