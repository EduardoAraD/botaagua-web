import { Button } from '../components/button'
import { CardMatch } from '../components/cardMatch'
import { CardNews } from '../components/cardNews'
import ScreenPage from '../components/screenPage'

export function Home() {
  return (
    <ScreenPage>
      <div className="flex flex-col gap-20">
        <section className="relative flex w-full">
          <img
            alt="Banner"
            className="h-full w-full object-cover"
            src="https://github.com/EduardoAraD/assets/blob/main/botaagua/news/arg_t1_f_1.jpeg?raw=true"
          />
          <div className="absolute bottom-0 flex w-full items-center justify-center bg-black/60 p-4">
            <p className="font-medium text-lg text-white md:text-2xl">
              Bem-vindo ao Botaagua Futebol Clube, onde a paixão pelo futebol se
              encontra com a tradição!
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-center lg:flex-row">
          <div className="p-6">
            <h4 className="mb-4 font-bold text-2xl">Próximo Jogos</h4>
            <CardMatch />
          </div>
          <div className="p-6">
            <h4 className="mb-4 font-bold text-2xl">Último Jogos</h4>
            <CardMatch />
          </div>
        </section>

        <ScreenPage.SectionCol>
          <h4 className="mb-4 font-bold text-2xl">Ultimas Notícias</h4>
          <div className='flex flex-col gap-3 py-2 md:grid md:grid-cols-[1fr_1fr] md:gap-10'>
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
          </div>
          <Button title='LEIA MAIS' />
        </ScreenPage.SectionCol>
      </div>
    </ScreenPage>
  )
}
