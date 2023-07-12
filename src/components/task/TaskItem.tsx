import { useActions } from '@/redux/hooks'
import { ITask } from '@/types/task.interface'

interface Props {
  task: ITask
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  const { toggleCompletionTask, removeTask } = useActions()
  return (
    <div
      className={`w-full mb-2 p-3 rounded-md border border-gray-300 ${
        task.completed ? 'border-green-500 bg-green-100' : 'border-gray-300'
      }`}
    >
      <div className='flex justify-between gap-2 mb-2'>
        <div className='text-lg'>{task.title}</div>
        <div
          className='flex-shrink-0 flex justify-center items-center h-6 w-6 border-2 border-slate-600 rounded-full cursor-pointer'
          onClick={() => toggleCompletionTask(task.id)}
        >
          <div
            className={`h-3 w-3 rounded-full ${
              task.completed && 'bg-slate-600'
            }`}
          ></div>
        </div>
      </div>
      <div className='text-sm mb-2'>{task.description}</div>
      <div className='flex justify-end'>
        <button
          className='text-xs bg-red-100 px-1 rounded-sm border border-red-300'
          onClick={() => removeTask(task.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  )
}
