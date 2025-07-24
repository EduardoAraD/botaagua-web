import stadium from '../assets/stadium.png'
import ScreenPage from '../components/screenPage'
import { TitleNavPage } from '../components/titleNavPage'
import { TitlePage } from '../components/titlePage'

export function About() {
  return (
    <ScreenPage>
      <div className="mx-auto max-w-6xl p-6">
        <TitleNavPage links={[{ path: '/sobre', name: 'Sobre' }]} />
        <TitlePage title="BOTAAGUA futebol clube" />

        <section className="mb-8">
          <h2 className="mb-2 font-semibold text-2xl">Nossa História</h2>
          <p>
            Fundado em 2023, o Botaagua FC nasceu de um sonhador que gostaria de
            criar um clube de futebol que unisse a comunidade do bairro Águas
            Claras. Seu nome possui uma ótima sonoridade, fácil de lembrar e
            gritar nos estádios, além de representar a força e a vida que a água
            traz, refletindo a garra de nossos atletas. O Botaagua surgiu com
            uma nova visão sobre o mundo de esportes, acreditando que o futebol
            pode transformar vidas e trazer alegria para todos.
          </p>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="mb-1 font-semibold text-xl">Missão</h3>
            <p>
              Inspirar jovens atletas e unir a comunidade através do esporte,
              oferecendo uma nova visão sobre o mundo de esportes com
              profissionalismo e paixão.
            </p>
          </div>
          <div>
            <h3 className="mb-1 font-semibold text-xl">Visão</h3>
            <p>
              Se tornar referência regional até 2030, sendo reconhecido como um
              clube inovador que nasceu de um sonho e se tornou realidade.
            </p>
          </div>
          <div>
            <h3 className="mb-1 font-semibold text-xl">Valores</h3>
            <p>
              Respeito, disciplina, superação, trabalho em equipe e amor pela
              camisa azul e amarela.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 font-semibold text-2xl">
            Escudo, Cores e Mascote
          </h2>
          <p>
            Nossas cores azul e amarelo representam confiança, força e alegria.
            O mascote oficial é a águia azul, símbolo de visão ampla e
            liderança.
          </p>
        </section>

        <section className="mb-8 flex flex-col gap-4">
          <div className="relative flex w-full">
            <img
              alt="Banner"
              className="h-full w-full rounded object-cover"
              src={stadium}
            />
            <div className="absolute bottom-0 flex w-full items-center justify-center bg-black/60 p-4">
              <p className="font-medium text-lg text-white md:text-2xl">
                Estádio Águas Vivas - A casa do Botaagua FC
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow-md">
            <h4 className="font-bold">Estádio Estádio Águas Vivas</h4>
            <p>
              Capacidade: <span>15.855</span>
            </p>
            <p>
              Estreia: <a href="#">Botaagua x Caucaia</a>
            </p>
          </div>
          <p>
            Localizado em Caucaia -CE, possui capacidade para 15 mil torcedores.
            Um estádio moderno, acolhedor e símbolo de orgulho para os
            torcedores.
          </p>
        </section>

        {/* <section className="mb-8 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold text-xl">Comissão Técnica</h3>
            <p>Técnico: João Silva - Ex-jogador e treinador licenciado CBF.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-xl">Diretoria</h3>
            <p>
              Presidente: Maria Souza - Fundadora e grande líder do clube desde
              2023.
            </p>
          </div>
        </section> */}

        <section className="mb-8">
          <h2 className="mb-2 font-semibold text-2xl">Momentos Históricos</h2>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            <img
              alt="Momento histórico"
              className="rounded"
              src="https://github.com/EduardoAraD/assets/blob/main/botaagua/news/arg_t1_f_1.jpeg?raw=true"
            />
          </div>
        </section>
      </div>
    </ScreenPage>
  )
}

/*
- Valores: respeito, disciplina, superação, trabalho em equipe.
3. **Escudo e Cores**
   - Explicação do significado das cores azul e amarelo.
   - Apresentação do mascote (água ou águia azul).

4. **Estádio**
   - Nome: Águas Vivas.
   - Capacidade, localização e curiosidades.

5. **Comissão Técnica e Diretoria**
   - Foto do técnico atual e presidente.
   - Pequeno histórico de cada um.

6. **Fotos da Torcida e Momentos Históricos**
   - Galeria de fotos marcantes.

7. **Depoimentos**
   - Frases de atletas, ex-jogadores ou torcedores ilustres.

8. **Parceiros e Patrocinadores**
   - Logos e links dos parceiros do clube.

9. **Chamada para ação**
   - Botão para se tornar sócio-torcedor ou comprar produtos oficiais.

---

Se quiser, posso criar esse componente completo em React com Tailwind agora para a tela de "Sobre" do Botaagua FC, me avise para gerar e organizar o código na estrutura do seu projeto.
*/
