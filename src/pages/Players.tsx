import { CardPlayer } from '../components/cardPlayer'
import ScreenPage from '../components/screenPage'
import { TitleNavPage } from '../components/titleNavPage'
import { TitlePage } from '../components/titlePage'
import type { Player } from '../model/player'

const players: Player[] = [
  {
    id: '1',
    imageUrl:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlpszGiBaRixwIdl8Urb-hRLKjX91GdCZUQdMOQDhySNzOegkH',
    name: 'João Silva',
    number: 10,
    position: 'MC',
    height: '1.78m',
    weight: '72kg',
    stats: { goals: 10, assists: 4 },
    overall: 78,
  },
]

export function Players() {
  return (
    <ScreenPage>
      <div className="mx-auto max-w-6xl p-6">
        <TitleNavPage links={[{ path: '/elenco', name: 'Elenco' }]} />
        <TitlePage title="Elenco" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {players.map((player) => (
            <CardPlayer key={player.id} player={player} />
          ))}
        </div>
      </div>
    </ScreenPage>
  )
}
