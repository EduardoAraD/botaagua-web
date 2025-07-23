import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="mt-20 flex flex-col bg-blue-800 text-white">
      <div className="mt-[-50px] flex items-center justify-center">
        <Logo />
      </div>
      <div className='flex items-center justify-center p-2'>
        <p>@ 2025 Botaagua FC - Eduardo Araújo</p>
      </div>
    </footer>
  )
}
