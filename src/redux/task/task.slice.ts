import { ITaskState, EnumTaskFilters } from '@/types/task.interface'
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { tasks } from '@/data/tasks'

const initialState: ITaskState = localStorage?.getItem('task')
  ? JSON.parse(localStorage.getItem('task') as string)
  : {
      tasks: tasks,
      filter: EnumTaskFilters.ALL,
    }

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({
        id: uuidv4(),
        title: payload.title,
        description: payload.description,
        completed: false,
        createdAt: Date.now(),
      })
    },
    toggleCompletionTask: (state, { payload }) => {
      const taskIdx = state.tasks.findIndex(task => task.id === payload)
      if (!Number.isNaN(taskIdx)) {
        state.tasks[taskIdx].completed = !state.tasks[taskIdx].completed
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(task => task.id !== payload)
    },
    setFilter: (state, { payload }) => {
      state.filter = payload
    },
  },
})

export const { addTask, toggleCompletionTask, removeTask } = taskSlice.actions
