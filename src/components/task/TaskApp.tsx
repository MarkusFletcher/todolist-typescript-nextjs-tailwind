'use client'
import { ITask } from '@/types/task.interface'
import { TaskList } from '@/components/task/TaskList'
import { TaskAddForm } from '@/components/task/TaskAddForm'
import { TaskFilter } from './TaskFilter'
import { useAppSelector } from '@/redux/hooks'
import { useEffect, useState } from 'react'
import { useTaskFilter } from '@/hooks/useTaskFilter'

export const TaskApp: React.FC = () => {
  const filteredTasks = useTaskFilter()

  return (
    <div className='max-w-3xl mx-auto bg-white p-5 md:p-10 md:rounded-3xl rounded-xl dark:bg-slate-900 dark:text-white'>
      <div className='flex md:flex-row flex-col gap-5 justify-between mb-5'>
        <TaskAddForm></TaskAddForm>
        <TaskFilter></TaskFilter>
      </div>
      <TaskList tasks={filteredTasks}></TaskList>
    </div>
  )
}
