import {Task} from '../taskList/TaskList.types';

export type TaskListDetailsProps = {
  task: Task;
  onHandleDelete: (id: number) => void;
};
