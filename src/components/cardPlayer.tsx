import type { Player } from '../model/player'

interface CardPlayerProps {
  player: Player
}

export function CardPlayer({ player }: CardPlayerProps) {
  return (
    <div className="group relative w-full overflow-hidden rounded-lg bg-white shadow-sm">
      <img
        alt={player.nome}
        className="h-70 w-full object-cover"
        src={player.imageUrl}
      />
      <div className="absolute top-0 left-0 rounded-br-sm bg-blue-900/80 p-2 text-white">
        <p className='font-semibold text-lg'>78</p>
        <span className=''>MC</span>
      </div>
      <div className="absolute bottom-0 h-10 w-full bg-blue-900/80 p-4 py-2 text-white duration-300 group-hover:h-30">
        <h4 className="mb-1 font-semibold text-lg">{player.number} {player.name}</h4>
        <p className="mb-1 text-sm">Altura: 1.78m | Peso: 72kg</p>
        <div className="text-sm">
          <p>Gols: {player.stats.goals}</p>
          <p>Assistências: {player.stats.assists}</p>
        </div>
      </div>
    </div>
  )
}
