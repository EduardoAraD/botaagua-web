interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button
      className="mx-auto mt-4 w-1/2 rounded-lg bg-blue-800 px-4 py-2 text-white hover:bg-blue-700"
      type="button"
      {...rest}
    >
      <span className='text-center font-semibold text-lg'>{title}</span>
    </button>
  )
}
