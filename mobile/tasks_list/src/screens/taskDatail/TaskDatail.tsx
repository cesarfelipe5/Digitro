import {RouteProp, useRoute} from '@react-navigation/native';
import {CheckBox} from '@rneui/themed';
import React, {useCallback, useEffect, useState} from 'react';
import {getTask} from '../../../utils';
import {Loading} from '../../components/loading';
import {Task, TaskDetail} from '../taskList/TaskList.types';
import {RootStackParamList} from './TaskDatail.types';

export const TaskDatail = () => {
  const {
    params: {id},
  } = useRoute<RouteProp<RootStackParamList, 'Task'>>();

  const [task, setTask] = useState<Task>({} as Task);
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

  const renderTaskDetail = (taskItem: TaskDetail) => {
    const updateFinished = () => {
      // const taskUpdate = (task.taskDetail[taskItem.id].finished = false);

      const taskUpdate = task.taskDetail.map(taskDetail =>
        console.log('taskItemtaskItemtaskItem', taskItem),
      );

      // setTask((t: Task) => {
      //   return {
      //     ...t,
      //     ...(t.taskDetail = [
      //       ...t.taskDetail,
      //       ...t.taskDetail.map(item =>
      //         item.id === taskItem.id ? (item.finished = !item.finished) : item,
      //       ),
      //     ]),
      //     // t.taskDetail[1].finished = false,
      //   };
      // });

      taskItem.finished = !taskItem.finished;
    };

    return (
      <CheckBox
        checked={taskItem.finished}
        title={taskItem.description}
        onPress={updateFinished}
      />
    );
  };

  return (
    <Loading loading={loading}>
      {task.taskDetail && task.taskDetail.map(renderTaskDetail)}
    </Loading>
  );
};
