import { Logo } from './logo'

export function Footer() {
  return (
    <footer className='mt-20 flex flex-col bg-blue-900 py-8 text-white'>
      <div className="mt-[-82px] flex items-center justify-center">
        <Logo />
      </div>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3'>
        {/* <div>
          <h3 className='mb-2 font-bold text-xl'>Botaagua FC</h3>
          <p className="text-sm">
            Orgulho de nossas águas e nossas cores. Fundado em 2023, escrevendo
            história com garra e paixão.
          </p>
        </div> */}

        <div>
          <h4 className='mb-2 font-semibold text-lg'>Links Rápidos</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a className="hover:underline" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/jogos">
                Jogos
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/classificacao">
                Classificação
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/loja">
                Loja
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='mb-2 font-semibold text-lg'>Contato</h4>
          <p className="text-sm">
            Estádio Águas Vivas
            <br />
            Rua do Futebol, 1000
            <br />
            Botaagua City - BR
          </p>
          <p className='mt-2 text-sm'>Email: contato@botaaguafc.com</p>
        </div>

        <div>
          <h4 className='mb-2 font-semibold text-lg'>Redes Sociais</h4>
          <div className="flex space-x-4">
            <a className="hover:text-yellow-400" href="#">
              Facebook
            </a>
            <a className="hover:text-yellow-400" href="#">
              Instagram
            </a>
            <a className="hover:text-yellow-400" href="#">
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className='mt-8 border-blue-500 border-t pt-4 text-center text-sm'>
        © 2025 Botaagua FC. Todos os direitos reservados.
      </div>
    </footer>
  )
}
