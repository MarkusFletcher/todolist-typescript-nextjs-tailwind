export interface ITask {
  id: string
  title: string
  description?: string
  completed: boolean
  createdAt?: number
}

export interface ITaskState {
  tasks: ITask[]
  filter: EnumTaskFilters
}

export interface ITaskData {
  title: string
  description: string
}

export interface ITaskFilter {
  title: string
  value: string
}

export enum EnumTaskFilters {
  ALL = 'all',
  COMPLETED = 'completed',
  UNCOMPLETED = 'uncompleted',
}
