import { ToggleTheme } from '@/components/ToggleTheme'

interface Props {}

export const Header: React.FC<Props> = ({}) => {
  return (
    <header className='h-10 flex items-center justify-end px-10 bg-slate-700'>
      <div className='h-10 w-10 bg-white dark:bg-black'></div>
      <ToggleTheme></ToggleTheme>
    </header>
  )
}
