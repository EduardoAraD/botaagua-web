import { ChevronRight } from 'lucide-react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

interface TitleNavPageProps {
  links: {
    path: string
    name: string
  }[]
}

export function TitleNavPage({ links }: TitleNavPageProps) {
  return (
    <div className='mb-5 flex items-center gap-1.5 border-gray-300 border-b-1 p-2 text-blue-950 text-xs uppercase'>
      <span>VOCÊ ESTÁ EM:</span>
      <Link
        className="mt-0.5 border-gray-100 border-b font-semibold duration-200 hover:border-blue-500 hover:text-blue-500"
        to="/"
      >
        INÍCIO
      </Link>
      {links.map((link) => (
        <Fragment key={link.path}>
          <span>
            <ChevronRight size={16} />
          </span>
          <Link
            className="mt-0.5 border-gray-100 border-b font-semibold duration-200 hover:border-blue-500 hover:text-blue-500"
            to={link.path}
          >
            {link.name}
          </Link>
        </Fragment>
      ))}
    </div>
  )
}
