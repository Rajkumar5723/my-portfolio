interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-blue-400">{title}</h2>
      <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4"></div>
    </div>
  )
}
