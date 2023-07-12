import { useAppSelector } from '@/redux/hooks'
import { useEffect, useState } from 'react'
import { EnumTaskFilters, ITask } from '@/types/task.interface'

export const useTaskFilter = (): ITask[] => {
  const { tasks, filter } = useAppSelector(state => state.task)
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>([])

  useEffect(() => {
    switch (filter) {
      case EnumTaskFilters.ALL:
        setFilteredTasks(tasks)
        break
      case EnumTaskFilters.COMPLETED:
        setFilteredTasks([...tasks].filter(task => task.completed === true))
        break
      case EnumTaskFilters.UNCOMPLETED:
        setFilteredTasks([...tasks].filter(task => task.completed === false))
        break
      default:
        break
    }
  }, [tasks, filter])

  return filteredTasks
}
