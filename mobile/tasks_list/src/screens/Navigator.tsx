import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {TaskDetailNavigator} from './taskDatail';
import {TaskListNavigator} from './taskList';

const MainStack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="TaskListNavigator"
        screenOptions={{headerShown: false}}>
        <MainStack.Screen
          name="TaskListNavigator"
          component={TaskListNavigator}
        />
        <MainStack.Screen
          name="TaskDetailNavigator"
          component={TaskDetailNavigator}
        />
        {/* <MainStack.Screen name="ModalSelectAsync" component={SelectAsync} />
        <MainStack.Screen name="ModalActionSuccess" component={ActionSuccess} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
