import { CardMatch } from '../components/cardMatch'
import { CardNews } from '../components/cardNews'

export function Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="flex justify-center">
        <div className="relative flex w-full max-w-[1440px]">
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
        </div>
      </section>

      <section className="flex flex-col justify-center lg:flex-row ">
        <div className="p-6">
          <h4 className="mb-4 font-bold text-2xl">Próximo Jogos</h4>
          <CardMatch />
        </div>
        <div className="p-6">
          <h4 className="mb-4 font-bold text-2xl">Último Jogos</h4>
          <CardMatch />
        </div>
      </section>

      <section className="flex flex-col justify-center">
        <h4 className="mb-4 font-bold text-2xl">Ultimas Notícias</h4>
        <div className="flex w-full max-w-[1440px] gap-10 px-6 py-2 md:grid md:grid-cols-[1fr_1fr]">
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
        <button
          className="mx-auto mt-4 w-1/2 rounded-lg bg-blue-800 px-4 py-2 text-white hover:bg-blue-700"
          type="button"
        >
          LEIA MAIS
        </button>
      </section>
    </div>
  )
}

// .list {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 1.5rem;
//   }

//   @media screen and (max-width: 700px) {
//     .list {
//       display: flex;
//       flex-direction: column;
//     }
//   }
