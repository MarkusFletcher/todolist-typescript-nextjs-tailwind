'use client'

export const ToggleTheme: React.FC = ({}) => {
  const clickHandler = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.cookie = 'color-theme='
      document.documentElement.classList.remove('dark')
    } else {
      document.cookie = 'color-theme=dark'
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <button className='bg-slate-300 px-4' onClick={clickHandler}>
      Сменить тему
    </button>
  )
}
