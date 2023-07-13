import { taskSlice } from './task/task.slice'

export const rootActions = {
  ...taskSlice.actions,
}
