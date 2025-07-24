interface TitlePageProps {
  title: string
}

export function TitlePage({ title }: TitlePageProps) {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h2 className="mb-6 text-center font-bold text-3xl text-blue-900 uppercase">
        {title}
      </h2>
    </div>
  );
}
