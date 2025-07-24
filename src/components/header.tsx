import { Menu, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Logo } from './logo'

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
  
  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  })

  useEffect(() => {
    if(screenWidth > 768 && isOpenMenu) {
      setIsOpenMenu(false)
    }
  })

  const isNavVisible = screenWidth > 768 || isOpenMenu

  return (
    <header>
      <div className="flex w-full justify-center bg-white">
        <div className="flex w-full max-w-[680px] items-center justify-between px-5 py-2 md:max-w-[1280px] md:py-8">
          <h2 className="ml-[140px] hidden flex-1 font-bold text-xl md:flex lg:text-2xl">
            BOTAAGUA FUTEBOL CLUBE
          </h2>
          <h2 className="flex flex-1 font-bold text-lg md:hidden">
            BOTAAGUA FC
          </h2>
          <Link className="mb-[-40px] flex md:hidden" to={'/'}>
            <Logo />
          </Link>
          <div className="flex flex-1 justify-end">
            <button className="flex gap-2" type="button">
              <User size={20} />
              <span>Entrar</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-blue-900 text-white">
        <div
          className="flex w-full max-w-[680px] flex-col items-start gap-4 px-5 py-1 duration-300 ease-in-out md:max-w-[1280px] md:flex-row md:items-center md:px-4 md:py-2"
          style={{ height: isOpenMenu ? 46 + 20 + 8 + 28 * 5 + 4 * 8 : 46 }}
        >
          <Link className="mt-[-100px] hidden md:flex" to={'/'}>
            <Logo />
          </Link>
          <button
            className="flex cursor-pointer items-center justify-center rounded-sm bg-blue-800 p-2 hover:brightness-110 md:hidden"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            type="button"
          >
            <Menu size={20} />
          </button>

          {isNavVisible && (
            <nav className="flex p-2 md:pb-2">
              <ul className='flex flex-col items-start gap-2 font-medium text-lg md:flex-row md:items-center md:gap-4'>
                <li>
                  <Link to={'/sobre'}>Sobre</Link>
                </li>
                <li>
                  <Link to={'/elenco'}>Elenco</Link>
                </li>
                <li>Jogos</li>
                <li>Campeonatos</li>
                <li>Contato</li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
