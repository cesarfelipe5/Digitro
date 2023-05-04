import {RouteProp, useRoute} from '@react-navigation/native';
import {CheckBox, Text} from '@rneui/base';
import {Icon} from '@rneui/themed';
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {getTask} from '../../../utils';
import {updateTask} from '../../../utils/AsyncStorage';
import {Loading} from '../../components/loading';
import {Task, TaskDetail} from '../taskList/TaskList.types';
import styles from './TaskDatail.styles';
import {RootStackParamList} from './TaskDatail.types';

export const TaskDatail = () => {
  const {
    params: {id},
  } = useRoute<RouteProp<RootStackParamList, 'Task'>>();

  const [task, setTask] = useState<Task>({} as Task);
  const [editable, setEditable] = useState(false);
  const [loading, setLoading] = useState(false);

  const getDataTask = useCallback(async () => {
    setLoading(true);

    const taskResponse = await getTask(id);

    setTask(taskResponse);

    setLoading(false);
  }, [id]);

  useEffect(() => {
    getDataTask();
  }, [getDataTask]);

  const hanldleEdit = () => {
    setEditable(true);
  };

  const renderTaskDetail = (taskItem: TaskDetail, index: number) => {
    const updateFinished = async () => {
      const taskUpdate = {...task};

      taskUpdate.taskDetail[index] = {
        ...taskItem,
        finished: !taskItem.finished,
      };

      setTask(taskUpdate);

      await updateTask(taskUpdate);
    };

    return (
      <CheckBox
        checked={taskItem.finished}
        title={taskItem.description}
        onPress={updateFinished}
        fontFamily="Inter-Regular"
      />

      // <EditableCheckbox
      //   checked={taskItem.finished}
      //   value={taskItem.description}
      //   onPress={updateFinished}
      //   editable={editable}
      //   onTextEdit={hanldleTextEdit}
      // />
    );
  };

  return (
    <Loading loading={loading}>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{task.title}</Text>

          <TouchableOpacity onPress={hanldleEdit}>
            <Icon type="font-awesome" name="pencil" />
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>{task.description}</Text>

        <View style={styles.divider} />

        {task.taskDetail && task.taskDetail.map(renderTaskDetail)}
      </View>
    </Loading>
  );
};
