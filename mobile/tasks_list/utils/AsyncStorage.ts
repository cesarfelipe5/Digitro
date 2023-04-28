import AsyncStorage from '@react-native-async-storage/async-storage';
import {Task} from '../src/screens/taskList/TaskList.types';

export const storeDataTask = async (value: Task[]): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(value);

    await AsyncStorage.setItem('task_list', jsonValue);

    return true;
  } catch (e) {
    console.log('storeDataTask', e);
    return false;
  }
};

export const getDataTask = async (): Promise<Task[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem('task_list');

    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log('getData', e);
    return [];
  }
};

export const getTask = async (id: number): Promise<Task> => {
  try {
    const taskList = await AsyncStorage.getItem('task_list');

    const taskListJson: Task[] = taskList !== null ? JSON.parse(taskList) : [];

    const taskListFind = taskListJson.find(task => task.id === id);

    return taskListFind ?? ({} as Task);
  } catch (e) {
    console.log('getData', e);
    return {} as Task;
  }
};

export const upadateTask = async (taskUpdate: Task): Promise<boolean> => {
  try {
    const taskList = await AsyncStorage.getItem('task_list');

    const taskListJson: Task[] = taskList !== null ? JSON.parse(taskList) : [];

    taskListJson.forEach(task => {
      if (task.id === taskUpdate.id) {
        task = {...taskUpdate};
        // task.description = taskUpdate.description;
        // task.taskDetail = taskUpdate.taskDetail;
        // task.title = taskUpdate.title;
      }

      storeDataTask(taskListJson);
    });

    return true;
  } catch (e) {
    console.log('upadateTask', e);

    return false;
  }
};

export const deleteTask = async (id: number): Promise<Task[]> => {
  try {
    const taskList = await AsyncStorage.getItem('task_list');

    const taskListJson: Task[] = taskList !== null ? JSON.parse(taskList) : [];

    const taskListUpdate = taskListJson.filter(task => task.id !== id);

    await storeDataTask(taskListUpdate);

    return taskListUpdate ?? [];
  } catch (e) {
    console.log('deleteTask', e);
    return [];
  }
};
