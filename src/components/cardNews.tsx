import { Link } from 'react-router-dom'

export function CardNews() {
  const noticias = [
    {
      titulo: 'Botaagua conquista vitória emocionante',
      data: '20/07/2025',
      imagem:
        'https://github.com/EduardoAraD/assets/blob/main/botaagua/news/arg_t1_f_0.jpeg?raw=true',
    },
  ]

  return (
    <Link
      className="block rounded-lg bg-white p-4 shadow transition-shadow hover:shadow-lg"
      to="/noticias"
    >
      <h3 className="mb-2 font-semibold text-lg">{noticias[0].titulo}</h3>
      <p className="mb-4 text-gray-600">{noticias[0].data}</p>
      <img
        alt={noticias[0].titulo}
        className="h-48 w-full rounded object-cover"
        src={noticias[0].imagem || 'https://via.placeholder.com/150'}
      />
      <span className='mt-2 block text-blue-800 text-lg hover:underline'>
        Leia mais
      </span>
    </Link>
  )
}
