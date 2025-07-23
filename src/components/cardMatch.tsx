import { Calendar, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function CardMatch() {
  const [finished, setFinished] = useState(false)
  const [hasPenalty, setHasPenalty] = useState(false)

  return (
    <Link to="/">
      <div className='flex flex-col items-center justify-between gap-1 rounded-2xl bg-white p-4 shadow'>
        <h3 className="font-bold text-lg">UEFA Champions League</h3>

        <div className="flex w-100 max-w-[350px] items-center justify-center gap-2">
          <div className="flex flex-1 flex-col items-center gap-1">
            <img
              alt="Botaagua"
              className="h-16 w-16 object-contain"
              src="https://github.com/EduardoAraD/assets/blob/main/league/logos/botaagua.png?raw=true"
            />
            <span className="hidden text-sm md:flex">Botaagua</span>
          </div>
          <h4 className="font-medium text-3xl">{finished ? 2 : ''}</h4>
          {hasPenalty ? (
            <span className="text-sm">{'3 x 2'}</span>
          ) : (
            <span className="text-sm">X</span>
          )}
          <h4 className="font-medium text-3xl">{finished ? 2 : ''}</h4>
          <div className="flex flex-1 flex-col items-center gap-1">
            <img
              alt="Botaagua"
              className="h-16 w-16 object-contain"
              src="https://github.com/EduardoAraD/assets/blob/main/league/logos/botaagua.png?raw=true"
            />
            <span className="hidden text-sm md:flex">Botaagua FC</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-1">
            <Calendar className="text-gray-500" size={16} />
            <span className="text-base">22/05/2024 19:00</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="text-gray-500" size={16} />
            <span className="text-base">El Libertador</span>
          </div>
        </div>
        <button
          className="mt-2 w-full rounded-lg bg-blue-800 px-4 py-2 text-white"
          type="button"
        >
          Detalhes
        </button>
      </div>
    </Link>
  )
}
