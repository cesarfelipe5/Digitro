import {FAB, Text} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {COLORS} from '../../../brands/Colors';
import {deleteTask, getDataTask, storeDataTask} from '../../../utils';
import {Loading} from '../../components/loading';
import {TaskListDetails} from '../taskListDetails';
import styles from './TaskList.styles';
import {Task} from './TaskList.types';

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const getTasksList = async () => {
    setLoading(true);

    const tasksList = await getDataTask();

    setTasks(tasksList);

    setLoading(false);
  };

  const storeTask = async (value: Task[]) => await storeDataTask(value);

  const storeTaskFab = async () => {
    await storeDataTask([
      {
        id: 1,
        description: 'Teste',
        title: 'Title teste',
        taskDetail: [
          {
            id: 1,
            description: 'taskDetail Description',
            finished: false,
          },
        ],
      },
      {
        id: 2,
        description: 'Teste 2',
        title: 'Title teste 2',
        taskDetail: [
          {
            id: 2,
            description: 'taskDetail Description 2 ',
            finished: true,
          },
        ],
      },
      {
        id: 3,
        description: 'Teste 3',
        title: 'Title teste 3',
        taskDetail: [
          {
            id: 3,
            description: 'taskDetail Description 3',
            finished: false,
          },
        ],
      },
    ]);

    await getTasksList();
  };

  const onHandleDelete = (id: number) => {
    const confirmDelete = async () => {
      const response = await deleteTask(id);

      setTasks(response);
    };

    return Alert.alert(
      'Tem certeza',
      'Tem certeza que deseja excluir essa tarefa',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: confirmDelete,
        },
      ],
    );
  };

  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <Loading loading={loading}>
      <View style={styles.container}>
        <FlatList
          data={tasks}
          initialNumToRender={5}
          renderItem={({item}) => (
            <TaskListDetails task={item} onHandleDelete={onHandleDelete} />
          )}
          keyExtractor={(item: Task) => item.id.toString()}
          // TODO REVER
          ListEmptyComponent={() => <Text>Vazio</Text>}
        />
      </View>

      <FAB
        icon={{name: 'add', color: COLORS.white}}
        placement="right"
        onPress={storeTaskFab}
        color={COLORS.secundary}
      />
    </Loading>
  );
};
