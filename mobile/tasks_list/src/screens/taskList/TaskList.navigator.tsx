import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Header} from '../../components/header';
import {TaskList} from './TaskList';

export const TaskListNavigator = () => {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator initialRouteName="TaskList">
      <MainStack.Screen
        name="TaskList"
        component={TaskList}
        options={{
          header: () => <Header title="Lista de tarefas" />,
        }}
      />
    </MainStack.Navigator>
  );
};
