export interface TaskDetail {
  id: number;
  description: string;
  finished: boolean;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  taskDetail: TaskDetail[];
}
