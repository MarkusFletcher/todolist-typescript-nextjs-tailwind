'use client'
import { Modal } from '@/components/ui/Modal'
import { useState } from 'react'
import { useActions } from '@/redux/hooks'
import { ITaskData } from '@/types/task.interface'

interface Props {}

const initialFormData: ITaskData = {
  title: '',
  description: '',
}

export const TaskAddForm: React.FC<Props> = ({}) => {
  const [show, setShow] = useState<boolean>(false)
  const [formData, setFormData] = useState<ITaskData>(initialFormData)
  const { addTask } = useActions()

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ): void => {
    const name: string = e.target.name
    const value: string | number = e.target.value
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    addTask({
      ...formData,
    })
    setShow(false)
  }

  return (
    <Modal openLabel='Добавить' showModal={show} setShowModal={setShow}>
      <form className='' onSubmit={submitHandler}>
        <div className='mb-5'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='taskTitle'
          >
            Название
          </label>
          <input
            className='appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-900 dark:text-white'
            id='taskTitle'
            type='text'
            placeholder='Название'
            name='title'
            onChange={handleInputChange}
          />
        </div>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='taskDescription'
        >
          Описание
        </label>
        <textarea
          className='appearance-none border border-gray-300 rounded-md w-full py-2 px-3 max-h-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-900 dark:text-white'
          name='description'
          id='taskDescription'
          rows={10}
          placeholder='Описание'
          onChange={handleInputChange}
        ></textarea>
        <div className='mt-2 text-center sm:text-left items-center gap-2 sm:flex'>
          <button
            type='button'
            className='w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border border-gray-300 ring-offset-2 ring-gray-600 focus:ring-2 dark:bg-slate-900 dark:text-white'
            onClick={() => setShow(false)}
          >
            Отмена
          </button>
          <button
            type='submit'
            className='w-full mt-2 p-2.5 flex-1 text-white bg-cyan-600 rounded-md outline-none ring-offset-2 ring-cyan-600 focus:ring-2'
          >
            Добавить
          </button>
        </div>
      </form>
    </Modal>
  )
}
