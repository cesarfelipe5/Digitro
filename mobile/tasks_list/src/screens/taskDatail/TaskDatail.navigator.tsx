import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Header} from '../../components/header';
import {TaskDatail} from './TaskDatail';

export const TaskDetailNavigator = () => {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator initialRouteName="TaskDatail">
      <MainStack.Screen
        name="TaskDatail"
        component={TaskDatail}
        options={{
          header: () => <Header title="Detalhes" showBack />,
        }}
      />
    </MainStack.Navigator>
  );
};
