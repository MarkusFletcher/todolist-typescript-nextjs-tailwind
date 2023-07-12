import { ITask } from '@/types/task.interface'
import { TaskItem } from './TaskItem'

interface Props {
  tasks: ITask[]
}

export const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  )
}
