import {useNavigation} from '@react-navigation/native';
import {Icon, Text} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../../brands/Colors';
import styles from './TaskListDetails.styles';
import {TaskListDetailsProps} from './TaskListDetails.types';

export const TaskListDetails = ({
  task,
  onHandleDelete,
}: TaskListDetailsProps) => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerTask}>
        <Text>{task.title}</Text>
        <Text>{task.description}</Text>
      </View>

      <View style={styles.containerIcons}>
        <Icon
          name="stepforward"
          type="antdesign"
          color={COLORS.secundary}
          onPress={() =>
            navigate(
              'TaskDetailNavigator' as never,
              {
                screen: 'TaskDatail',
                params: {id: task.id},
              } as never,
            )
          }
          style={styles.icon}
        />

        <Icon
          name="arrow-left"
          type="font-awesome"
          color={COLORS.secundary}
          onPress={() => onHandleDelete(task.id)}
          style={styles.icon}
        />
      </View>
    </View>
  );
};
