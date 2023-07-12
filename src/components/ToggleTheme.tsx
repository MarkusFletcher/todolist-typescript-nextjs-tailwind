'use client'

interface Props {}

export const ToggleTheme: React.FC<Props> = ({}) => {
  const clickHandler = () => {
    document.cookie = 'color-theme=light'
    console.log(document.cookie)
  }

  return (
    <button className='bg-slate-300 px-4' onClick={clickHandler}>
      Toggle theme
    </button>
  )
}
