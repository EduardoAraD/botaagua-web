import { CardNews } from '../components/cardNews'
import ScreenPage from '../components/screenPage'
import { TitleNavPage } from '../components/titleNavPage'
import { TitlePage } from '../components/titlePage'

export function News() {
  return (
    <ScreenPage>
      <div className="mx-auto flex w-full max-w-6xl flex-col p-6">
        <TitleNavPage links={[{ path: '/noticias', name: 'Notícias' }]} />
        <TitlePage title="Notícias" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
      </div>
    </ScreenPage>
  )
}
