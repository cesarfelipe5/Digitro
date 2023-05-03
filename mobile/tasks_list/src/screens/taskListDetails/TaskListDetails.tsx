import {useNavigation} from '@react-navigation/native';
import {Icon, Text} from '@rneui/themed';
import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {COLORS} from '../../../brands/Colors';
import styles from './TaskListDetails.styles';
import {TaskListDetailsProps} from './TaskListDetails.types';

export const TaskListDetails = ({
  task,
  onHandleDelete,
}: TaskListDetailsProps) => {
  const {navigate} = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigate(
          'TaskDetailNavigator' as never,
          {
            screen: 'TaskDatail',
            params: {id: task.id},
          } as never,
        )
      }>
      <View style={styles.container}>
        <View style={styles.containerTask}>
          <Text>{task.title}</Text>
          <Text>{task.description}</Text>
        </View>

        <Icon
          name="trash"
          type="font-awesome"
          color={COLORS.secundary}
          onPress={() => onHandleDelete(task.id)}
          style={styles.icon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
