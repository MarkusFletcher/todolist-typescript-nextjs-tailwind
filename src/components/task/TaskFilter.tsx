import { useActions, useAppSelector } from '@/redux/hooks'
import { ITaskFilter, EnumTaskFilters } from '@/types/task.interface'

const taskFilters: ITaskFilter[] = [
  {
    title: 'Все',
    value: EnumTaskFilters.ALL,
  },
  {
    title: 'Выполненные',
    value: EnumTaskFilters.COMPLETED,
  },
  {
    title: 'Невыполненные',
    value: EnumTaskFilters.UNCOMPLETED,
  },
]

export const TaskFilter: React.FC = () => {
  const { filter } = useAppSelector(state => state.task)
  const { setFilter } = useActions()
  const onSetFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as EnumTaskFilters)
  }

  return (
    <select
      className='p-2.5 rounded-md border border-gray-300 cursor-pointer dark:bg-transparent'
      name='filter'
      id='filter'
      onChange={onSetFilter}
      value={filter}
    >
      {taskFilters.map(filter => (
        <option
          className='dark:bg-slate-900'
          value={filter.value}
          key={filter.value}
        >
          {filter.title}
        </option>
      ))}
    </select>
  )
}
