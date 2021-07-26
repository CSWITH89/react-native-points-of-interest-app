import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import AppStack from './AppStack';

const {Navigator, Screen} = createStackNavigator();

const MainNav: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      {/* <Screen name="AppStack" component={AppStack}></Screen> */}
    </Navigator>
  );
};

export default MainNav;
